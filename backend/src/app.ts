import 'dotenv/config';
import app from '@/server/server';
import { sequelize } from '@/models/connectionDb';

(async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log('Connection has been established successfully');

    app.listen(app.get('port'), () => {
      console.log(`Express Server 🚀 running on PORT ${app.get('port')} - Worker ${process.pid}`);
    });
  } catch (err) {
    console.log('Unable to connect to database', err);
  }
})();
