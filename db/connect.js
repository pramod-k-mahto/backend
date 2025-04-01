var mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mahtop324:nnZBbkTdU89HAMjx@democluster.l0d1dk7.mongodb.net/?retryWrites=true&w=majority&appName=democluster"
    );
    console.log("database connection established");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
