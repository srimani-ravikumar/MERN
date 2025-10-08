// testConnection.js
require('dotenv').config();
console.log(process.env.MONGO_URI);
const mongoose = require('mongoose');

async function testConnection() {
  try {
    console.log("🔌 Connecting to MongoDB Atlas...");
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected successfully to MongoDB Atlas!");
  } catch (err) {
    console.error("❌ Connection failed:", err.message);
  } finally {
    // Always close the connection when done testing
    await mongoose.disconnect();
    console.log("🔒 Connection closed.");
  }
}

testConnection();
