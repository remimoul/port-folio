const express = require("express");
const app = express();
const port = 3005;

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/portfolio");

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

const userRoute = require("./src/back-end/routes/userRoute");
app.use("/user", userRoute);

const projetRoute = require("./src/back-end/routes/projetRoute");
app.use("/projet", projetRoute);

const infopersoRoute = require("./src/back-end/routes/infopersoRoute");
app.use("/infoperso", infopersoRoute);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
    });