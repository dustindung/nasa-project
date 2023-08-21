const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://nasa-api:IQMDAuUTgnORvtkO@nasacluster.rnbsq4x.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.connection.close();
}

module.exports = { mongoConnect, mongoDisconnect };