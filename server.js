const express = require('express');
const app = express();
const port = 3005;
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/portfolio');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const userRoute = require('./src/back-end/routes/userRoute');
app.use('/user', userRoute);

const projetRoute = require('./src/back-end/routes/projetRoute');
app.use('/projet', projetRoute);

const infopersoRoute = require('./src/back-end/routes/infopersoRoute');
app.use('/infoperso', infopersoRoute);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
