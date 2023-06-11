require("dotenv").config();
const { PORT } = process.env;

// const mongoose = require('mongoose');
const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

const post = require('./routes/index')
const user = require('./routes/user')
// const auth = require('./routes/auth')


// const {DATABASE_URL} = process.env
// const {MONGODB_URI} = process.env


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
app.use('/api/', post); 
app.use("/user", user);
// app.use("/auth", auth);

//catch all 404 route! 
app.use((req, res) => {res.status(404).json({message: "NOT A PROPER ROUTE"})})


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));