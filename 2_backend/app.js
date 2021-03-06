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
  })
  .then((res) => {
    // Starting server
    app.listen(PORT, () => console.log(`Server is runing on port ${PORT}...`));
  })
  .catch((err) => console.log(err));

// Middlewares
app.use(
  cors()
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
        .then((data) => res.json({ status: 'Success' }))
        .catch((err) =>{
          console.log('an error occued')
          res.json({ status: 'Failed' })
        })
   
})

app.put("/api/users/:id", (req, res)=>{
    if (!req.body.name || !req.body.age || !req.body.password || !req.body.email) {
        res.status(400).json({ message: 'All fields are required' });
        return;
      }
      // -- if valdiation passes, updating car
      let userId = req.params.id;
    
      User.findByIdAndUpdate(userId, req.body)
        .then((data) => res.json({ status: 'Success' }))
        .catch((err) =>{
            console.log('an error occued')
            res.json({ status: 'Failed' })
        })
 
})

app.delete("/api/users/:id", (req, res)=>{
    let userId = req.params.id;

        User.findByIdAndDelete(userId)
        .then((data) => res.json({ status: 'Success' }))
        .catch((err) =>{
          console.log('an error occued')
          res.json({ status: 'Failed' })
        } )
   
   
})


