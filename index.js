const express = require("express");
const app = express();
const path = require('path')
const cors = require('cors');
const { request } = require('http');
let Blog = require("./schemas/blog.js/index.js");

const publicDirectory = path.join(__dirname, 'client/build')
app.use(express.static(publicDirectory))

app.use(cors())
app.use(express.json())
const port = 5000;



app.listen(port, () => console.log("connected to port #: " + port));

