const express = require("express");
const server = express();
const port = 3005;
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/portfolio");

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const folioRoute = require("./routes/folioRoute");
server.use("/", folioRoute);


app.listen(port, () => {
    console.log(`app listening on port ${port}`);
    });