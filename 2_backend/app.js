// Requiring packages
const express = require('express');
const cors = require('cors');
const Car = require('./models/user');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

// Connecting to DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((res) => {
    // Starting server
    app.listen(PORT, () => console.log(`Server is runing on port ${PORT}...`));
  })
  .catch((err) => console.log(err));

// Middlewares
app.use(
  cors({
    origin: 'http://127.0.0.1:5500',
  })
);
app.use(express.json());
