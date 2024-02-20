// require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { startDatabase, stopDatabase, isConnected } = require('./dbconfig')
const port = 3000


// // Connect to MongoDB database
// connectDB() 
app.get('/ping', (req, res) => {
  res.send('pong')
})

app.get('/', (req, res) => {
  res.json({
    message: 'o_O',
    database: isConnected() ? 'connected' : 'disconnected'
  })
});




// mongoose.connection.once('open', ()=> {
//   console.log('Connected to mongoDB')
  
// })
app.listen(port, async() => {
  await startDatabase();
  console.log(`Example app listening on port ${port}`)
})
