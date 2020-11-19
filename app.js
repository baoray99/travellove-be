const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("./db/db");

const authRoute = require("./routes/auth");
const placeRoute = require("./routes/place");

app.use(bodyParser.json());
app.use("/users", authRoute);
app.use("/places", placeRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
