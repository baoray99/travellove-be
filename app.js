const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("./db/db");

const port = process.env.PORT || 3500;
const authRoute = require("./routes/auth");
const placeRoute = require("./routes/place");

app.use(cors());
app.use(bodyParser.json());
app.use("/users", authRoute);
app.use("/places", placeRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
