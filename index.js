import blogs from "./schemas/blog.js";
import { } from 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
// import path from 'path';
// const { request } = require('http');
// const publicDirectory = path.join(__dirname, 'client/build')
// app.use(express.static(publicDirectory))
const app = express();
const jwt = require ('jsonwebtoken');
app.use(cors());
app.use(express.json());
const port = 5000;

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

