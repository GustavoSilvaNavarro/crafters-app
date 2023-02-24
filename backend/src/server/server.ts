import express, { Application } from 'express';
import cors from 'cors';
// import morgan from 'morgan';

import env from '@/utils/env';
// import { verifyJwt } from '@/middleware/auth';
import mainRoutes from '@/routes/main-routes';
import userRoutes from '@/routes/user-routes';
import postRoutes from '@/routes/post-routes';
import commentRoutes from '@/routes/comment-routes';
import wishListRoutes from '@/routes/wishlist-routes';
import paymentRoutes from '@/routes/payment-routes';
import orderRoutes from '@/routes/order-routes';
import likeRoutes from '@/routes/like-routes';
import { pageNotFound } from '@/middleware/pageNotFound';
import { errorHandler } from '@/middleware/errorHandler';

const app: Application = express();

app.set('port', process.env.PORT || 8080);

app.use(express.json());
app.use(
  cors({
    origin: env.clientAppUrl,
  })
);
// app.use(verifyJwt);
// app.use(morgan('dev'));

app.use('/listPosts', mainRoutes);
app.use('/user', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/wishlist', wishListRoutes);
app.use('/purchase', paymentRoutes);
app.use('/orders', orderRoutes);
app.use('/likes', likeRoutes);

app.use('*', pageNotFound);
app.use(errorHandler);

export default app;
