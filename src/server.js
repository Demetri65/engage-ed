const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors') ;
const routes = require('./routes'); // includes routes.js

require('dotenv').config();

const app = express();
// middlewares
app.use(cors()); // We're telling express to use CORS
app.use(express.json());
app.use(routes); // tells the server to use the routes in routes.js

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('database connected'));

app.listen(process.env.PORT, () => {
    console.log("The API is running...");
});