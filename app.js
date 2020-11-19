const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("./db/db");

const authRoute = require("./routes/auth");

app.use(bodyParser.json());
app.use("/users", authRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
