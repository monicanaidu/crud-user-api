const mongoose = require("mongoose");


const connectDb = async () => {
  return mongoose
    .connect(process.env.MONGO_DEV)
    .then((res) => {
      console.log(`mongodb connected succesfully`);
    })
    .catch((err) => console.log(err));
};

module.exports = connectDb;
