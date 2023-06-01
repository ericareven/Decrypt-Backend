require("dotenv").config();
const { PORT } = process.env;

const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

const routes = require('./routes/index')
const users = require('./routes/users')

// MiddleWare
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());
app.use(cors('*'));
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// Routes
app.use('/', routes);
// app.use("/routes/users", users);

//catch all 404 route! 
app.use((req, res) => {res.status(404).json({message: "NOT A PROPER ROUTE"})})


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));