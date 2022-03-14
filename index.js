import blogs from "./schemas/blog.js";
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
const app = express();
// import path from 'path';
// const { request } = require('http');


// const publicDirectory = path.join(__dirname, 'client/build')
// app.use(express.static(publicDirectory))
app.use(cors())
app.use(express.json())
const port = 5000;
//config
const connection_url = 'mongodb+srv://shecodes:shecodes@cluster0.5kxnj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// API endpoints
app.post ('/blogs', (req, res)=>{
  const DBblog = req.body;

  blogs.create(DBblog, (err, data)=>{
    if (err){
      res.status(500).send(err)
    }else{
      res.status(201).send(data)
    }
  })
})

app.get('/blogs', (req, res)=>{
  blogs.find((err, data)=>{
    if (err){
      res.status(500).send(err)
    }else{
      res.status(200).send(data)
    }
  })
})
// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
//listener
app.listen(port, () => console.log("connected to port #: " + port));

