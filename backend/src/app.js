// -------- IMPORTS --------
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const cors = require('cors');

// -------- VARIABLE ROUTES --------
const applicantApiRoute = require('./routes/api/applicantApiRoute');
const professionApiRoute = require('./routes/api/professionApiRoute');

// -------- CONFIG ENV --------
require('dotenv').config();

// -------- CORS CONFIG --------
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
};

// ------- MIDDLEWARES --------
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cors(corsOptions));

// ------ SERVER LISTENING ------
app.listen(process.env.PORT, () =>
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`),
);

// -------- ROUTES --------
app.use('/api/applicant', applicantApiRoute);
app.use('/api/profession', professionApiRoute);
