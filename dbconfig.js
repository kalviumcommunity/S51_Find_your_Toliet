const mongoose = require('mongoose');
const URI = "mongodb+srv://jayavarsanr:jayavarsan@findyourtoilet.e1nama6.mongodb.net/Findyourtoilet/?retryWrites=true&w=majority"

const startDatabase = async () => {
  try {
    await mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    console.log("MongoDB Connected...")
    } catch (err) {
    console.error(err.message);
    process.exit(1)}
};

const stopDatabase = async () => {
  try {
    await mongoose.disconnect(URI)
    console.log("MongoDB Disconnected...")
    } catch (err) {
    console.error(err.message);
    process.exit(1)}
};

const isConnected = () => {
  return mongoose.connection.readyState === 1;
}

module.exports = { startDatabase, stopDatabase, isConnected };
