const express = require("express");
const app = express();

const cors = require('cors');

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


let corsOptions = {
    origin:"*"
  }
app.use(cors(corsOptions));
  
app.listen(3000, () => console.log("servidor escuchando en el puerto 3000"));