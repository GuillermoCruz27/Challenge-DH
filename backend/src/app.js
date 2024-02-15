const express = require('express');
const app = express();

const cors = require('cors');
const applicantApiRoute = require('./routes/api/applicantApiRoute');
const professionApiRoute = require('./routes/api/professionApiRoute');

const methodOverride = require('method-override');
const env = require('dotenv');

env.config();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

let corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));

app.listen(PORT, () => console.log(`servidor escuchando en el puerto ${PORT}`));

app.use('/api/applicant', applicantApiRoute);
app.use('/api/profession', professionApiRoute);
