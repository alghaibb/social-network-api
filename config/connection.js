const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social-network-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connection = mongoose.connection

connection.on("error", console.error.bind(console, "connection error:"))
connection.once("open", () => {
  console.log("connected to database")
})

module.exports = connection