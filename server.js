const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const cors = require('cors');
const usermodel = require('./dbconfig')
const updateAndPostValidator = require('./backend/validator')


app.use(cors());
app.use(express.json());

// Connect to MongoDB
app.get('/getrecords',(req,res)=>{
  usermodel.find()
  .then(users => res.json(users))
  .catch(err=>console.log(err));
})

app.get('/getrecords/:id',(req,res)=>{
  const  id= req.params.id;
  usermodel.findById({_id})
  .then(users => res.json(users))
  .catch(err=>console.log(err));
})


app.post('/createrecords', async (req,res)=>{

    try{
      const { error, value } = updateAndPostValidator(req.body);
    if (error) {
      return res.status(400).json(error.details);
    }
    else{
      usermodel.create(req.body)
      .then((user) => res.json(user))

    }}catch(e){
        console.error("Error creating user:", error);
    }
})

app.put('/getrecords/:id',(req,res)=>{
  
  try{
    const { error, value } = updateAndPostJoi(req.body);
  if (error) {
    return res.status(400).json(error.details);
  }else{
    const  id= req.params.id;
    usermodel.findByIdAndUpdate({_id},{
    ID:req.body.ID,
    Name:req.body.Name,
    type:req.body.type,
    city:req.body.city,
    Location:req.body.Location,
    Rating:req.body.Rating
  })
  .then(users => res.json(users))
  }
} catch(e){
    console.log('update error', e);
}})
 
mongoose.connect("mongodb+srv://jayavarsanr:jayavarsan@findyourtoilet.e1nama6.mongodb.net/Findyourtoilet?retryWrites=true&w=majority&appName=Findyourtoilet")
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

