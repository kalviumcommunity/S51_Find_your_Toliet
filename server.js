const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const cors = require('cors');
const usermodel = require('./dbconfig')


app.use(cors());
app.use(express.json());

// Connect to MongoDB
app.get('/getrecords',(req,res)=>{
  usermodel.find()
  .then(users => res.json(users))
  .catch(err=>console.log(err));
})

mongoose.connect("mongodb+srv://jayavarsanr:jayavarsan@findyourtoilet.e1nama6.mongodb.net/Findyourtoilet?retryWrites=true&w=majority&appName=Findyourtoilet")
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

