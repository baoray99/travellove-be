const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected DB")
);
