// Requiring packages
const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

// Connecting to DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((res) => {
    // Starting server
    app.listen(PORT, () => console.log(`Server is runing on port ${PORT}...`));
  })
  .catch((err) => console.log(err));

// Middlewares
app.use(
  cors({
    origin: 'http://127.0.0.1:5500',
  })
);
app.use(express.json());


app.get("/api/users", (req, res)=>{
    User.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
})

app.post("/api/users", (req, res)=>{
    if (!req.body.name || !req.body.age || !req.body.password || !req.body.email) {
        res.status(400).json({ message: 'All fields are required' });
        return;
      }
      // -- if valdiation passes, adding new car
      const user = new User(req.body);
    
      user
        .save()
        .then((data) => {
          res.json({ message: 'New user added!' });
        })
        .catch((err) => console.log(err));
})

app.put("/api/users/:id", (req, res)=>{
    if (!req.body.name || !req.body.age || !req.body.password || !req.body.email) {
        res.status(400).json({ message: 'All fields are required' });
        return;
      }
      // -- if valdiation passes, updating car
      let userId = req.params.id;
    
      User.findByIdAndUpdate(userId, req.body)
        .then((data) => res.json({ message: 'User updated!' }))
        .catch((err) => console.log(err));
})

app.delete("/api/users/:id", (req, res)=>{
    let userId = req.params.id;

    User.findByIdAndDelete(userId)
      .then((data) => res.json({ message: 'User deleted!' }))
      .catch((err) => console.log(err));
})


