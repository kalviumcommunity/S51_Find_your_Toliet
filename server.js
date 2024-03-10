const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const cors = require('cors');
const usermodel = require('./dbconfig');
const updateAndPostValidator = require('./backend/validator');
const cookieParser = require('cookie-parser');
const fs = require('fs'); // Import the fs module
const usersFilePath = "./data.json"; // Path to data file
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'superSecretKey123!'; // Replace with your actual secret key

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Connect to MongoDB
app.get('/getrecords',(req,res)=>{
  usermodel.find()
  .then(users => res.json(users))
  .catch(err=>console.log(err));
});

app.get('/getrecords/:id',(req,res)=>{
  const  id= req.params.id;
  usermodel.findById({_id})
  .then(users => res.json(users))
  .catch(err=>console.log(err));
});

app.post('/createrecords', async (req, res) => {
  usermodel.create(req.body)
    .then((user) => res.json(user))
    .catch(err => {
      console.error(err);
      if (updateAndPostValidator.isDuplicateKeyError(err)) {
        return res.status(409).send("User already exists");
      } else {
        return res.status(500).send("Internal Server Error");
      }
    });
});

app.put('/getrecords/:id', (req, res) => {
  const id = req.params.id;
  usermodel.findByIdAndUpdate(id, req.body, { new: true }) // Pass the id directly and req.body as update data
      .then(updatedUser => {
          res.json(updatedUser);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({ error: 'Internal Server Error' });
      });
});

app.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await usermodel.findByIdAndDelete(id);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  console.log(username,password);
  const users = getUsers();
  // Check if username already exists
  if ( users && users.find(user => user.username === username)) {
     res.status(404).json({ message: 'Username already exists' });
     return;
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = { username, password: hashedPassword };
  saveUsers(newUser);

  // Generate JWT token
  const token = jwt.sign({ username }, secretKey, { expiresIn: '200h' }); 

  res.cookie('token', token);
  res.json({ token });
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = getUsers();
  // Find user by username
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Check password
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  // Generate JWT token
  const token = jwt.sign({ username }, secretKey);
  res.cookie('token', token);
  res.json({ token });
});

// Protected route
app.post('/protected', verifyToken, (req, res) => {
  if (req.user) {
      // If user is authenticated, return user information
      res.json({ authenticated: true, user: req.user });
    } else {
      // If user is not authenticated, return appropriate response
      res.json({ authenticated: false });
    }
});

// Middleware function to verify JWT token
function verifyToken(req, res, next) {
  const token = req.body.token;
  console.log(token);
  if (!token) {
    next();
    return;
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = decoded;
    next();
  });
}

// Endpoint to clear the cookie
app.get('/logout', (req, res) => {
  // Clear the 'token' cookie by setting an empty value and an expiry date in the past
  res.clearCookie('token', { httpOnly: true, expires: new Date(0) });
  res.json({ message: 'Logged out successfully' });
});

function getUsers() {
  try {
    const usersData = fs.readFileSync(usersFilePath, 'utf-8');
    return JSON.parse(usersData);
  } catch (error) {
    console.error('Error reading users data:', error);
    return [];
  }
}

// Function to save users to JSON file
function saveUsers(users) {
  try {
      let existingUsers = [];
      if (fs.existsSync(usersFilePath)) {
          const data = fs.readFileSync(usersFilePath, 'utf8');
          existingUsers = JSON.parse(data);
      }
      existingUsers.push(users);
      fs.writeFileSync(usersFilePath, JSON.stringify(existingUsers, null, 2));
  } catch (error) {
      console.error('Error saving users data:', error);
  }
}
 
mongoose.connect("mongodb+srv://jayavarsanr:jayavarsan@findyourtoilet.e1nama6.mongodb.net/Findyourtoilet?retryWrites=true&w=majority&appName=Findyourtoilet")
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
