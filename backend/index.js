const express = require("express");
const app = express();
const path = require('path')
const cors = require('cors')

const publicDirectory = path.join(__dirname, 'client/build')
app.use(express.static(publicDirectory))

app.use(cors())
app.use(express.json())
const port = 5000;

app.get('/', (req, res) => {
    res.send('<h1>express (Backend)</h1>')
})

app.post('/', (req, res) => {
    console.log(req.body);
    let { value } = req.body
    res.send(value)
    // add to db 
})

app.post('/', (req, res) => {
    console.log(req.body);

    res.send(req.value)
    // add to db 
})

app.listen(port, () => console.log("connected to port #: " + port));

