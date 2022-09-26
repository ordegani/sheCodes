import blogs from "./schemas/blog.js";
import { } from 'dotenv/config';
// require ('dotenv').config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { auth } from 'express-openid-connect';
// not needed:
// import path from 'path';
// const { request } = require('http');
// const publicDirectory = path.join(__dirname, 'client/build')
// app.use(express.static(publicDirectory))

const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

//Auth0
const { auth } = require('express-openid-connect');
app.use(
  dotenv.config(auth)({
    issuerBaseURL: process.env.issuerBaseURL,
    baseURL: process.env.auto_baseURL,
    clientID: process.env.clientID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);

//config
const connection_url = process.env.connection_url;

// API endpoints
app.post('/blogs', (req, res) => {
  const DBblog = req.body;
  blogs.create(DBblog, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.get('/blogs', (req, res) => {
  blogs.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

//DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.listen(port, () => console.log("connected to port #: " + port));

