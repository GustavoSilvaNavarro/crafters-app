# Crafters Social Media App

<p align="center">
  <img src="https://user-images.githubusercontent.com/66889974/206877385-0bed4b55-f246-429e-94de-adee21912fd5.png" />
</p>

Crafters is a social media app aimed at helping local crafters to show and share their personal hand made work to the rest of the world, with the possibility to sell their project and make money of it.

## Screenshots

<p align="center">
  <img src="https://user-images.githubusercontent.com/66889974/206877619-d43e29d1-74f8-46c4-a1ec-d49a4747d367.png" />

  <img src="https://user-images.githubusercontent.com/66889974/206879053-a53cd71d-d0c3-4c7b-96ca-67ccd45bf1e8.png" />

  <img src="https://user-images.githubusercontent.com/66889974/206879854-7daf1a53-d0a0-4446-9a37-3a76a6483d69.png" />
</p>

## Getting started
1. Clone the repo
```shell
git clone https://github.com/GustavoSilvaNavarro/crafters-app.git
cd crafters-app
```

2. Run command to install dependencies backend and frontend
```powershell
npm install
```

### Backend
1. Server is using SQL database, You should create a database with the name of your preferences and create a .env file with the following keys
```js
// DB connection to SQL
DB_SQL_HOST= //example 127.0.0.1
DB_SQL_USERNAME=  //example root
DB_SQL_PORT=  //example 3306
DB_SQL_PASSWORD= // user's password
DB_SQL_DATABASENAME=  //database name
DB_SQL_DIALECT=  //example mysql

// CLOUDINARY KEYS info provided by cloudinary | https://console.cloudinary.com/users/login#gsc.tab=0
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_PUBLIC_KEY=
CLOUDINARY_SECRET_KEY=

// STRIPE KEYS  Provide by Stripe | https://stripe.com/
STRIPE_PUBLIC_KEY=
STRIPE_PRIVATE_KEY=

// Auth0 KEYS provided by auth0
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_AUTH0_UNIQUE_IDENTIFIER=

// Client domain
CLIENT_DOMAIN_URL= //example http://localhost:3000
```

2. Run development server
```json
npm run start:dev
```

### Frontend
1. Create a .env file with the following keys
```js
// Auth0 KEYS for client side | https://auth0.com/docs/quickstart/backend/nodejs/interactive
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
```
2. Run react in developer mode
```json
npm start
```

## Build with
### Backend
* [Express](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework
* [NodeJs](https://nodejs.org/en/) - An open-source, cross-platform JavaScript runtime environment.
* [Sequelize](https://sequelize.org/) - ORM for SQL Databases
* [MariaDB](https://mariadb.org/) - SQL Database
* [Stripe](https://stripe.com/gb) - Service for payment methods and much more.
* [Cloudinary](https://console.cloudinary.com) - Media Library that allows to store media.
* [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript.

### Frontend
* [React](https://reactjs.org/) - Front end library for building user interfaces.
* [FilePond](https://pqina.nl/filepond/) - A JavaScript library that can upload anything you throw at it.
* [Auth0](https://auth0.com/) - Service for authentication and authorization.
* [Tailwindcss](https://tailwindcss.com/) - CSS Framework to style applications.
* [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React.

## Author
* Gustavo Silva Navarro - [GitHub](https://github.com/GustavoSilvaNavarro) - [Linkedin](https://www.linkedin.com/in/gustavo-silva-navarro/)
