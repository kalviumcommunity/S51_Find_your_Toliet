const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://jayavarsanr:jayavarsan@findyourtoilet.e1nama6.mongodb.net/Findyourtoilet/?retryWrites=true&w=majority")


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
