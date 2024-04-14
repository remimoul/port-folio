const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Port-Folio API",
      description: "MDS API for Port-Folio",
      contact: {
        name: "Rémi",
      },
      servers: [process.env.HEROKU_URL],
    },
  },
  apis: ["./api-docs/swagger.js"],
};

mongoose.connect(process.env.MONGO_URL);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


const userRoute = require('./routes/userRoute');
app.use('/user', userRoute);

const projetRoute = require('./routes/projetRoute');
app.use('/projet', projetRoute);

const infopersoRoute = require('./routes/infopersoRoute');
app.use('/infoperso', infopersoRoute);

const exproRoute = require('./routes/exproRoute');
app.use('/expro', exproRoute);

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
