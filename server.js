const express = require("express");
const server = express();
const port = 3005;
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/portfolio");

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

app.get('/projet', (req, res) => {
  res.send('Hello World!')
})

app.post('/projet', (req, res) => { 
    console.log(req.body);
    res.send('Post received');
    });

app.put('/projet', (req, res) => {
    res.send('Got a PUT request at /projet')
    });
    
app.delete('/projet', (req, res) => {
    res.send('Got a DELETE request at /projet')
    });
    
app.get('/infoperso', (req, res) => {
    res.send('Hello World! Info perso')
    })
app.post('/infoperso', (req, res) => {
    console.log(req.body);
    res.send('Post received');
    });
app.put('/infoperso', (req, res) => {
    res.send('Got a PUT request at /infoperso')
    });
app.delete('/infoperso', (req, res) => {
    res.send('Got a DELETE request at /infoperso')
    });

app.get('/contact', (req, res) => {
    res.send('Hello World! contact')
    });

app.post('/contact', (req, res) => {
    console.log(req.body);
    res.send('Post received');
    });


app.listen(port, () => {
    console.log(`app listening on port ${port}`);
    });