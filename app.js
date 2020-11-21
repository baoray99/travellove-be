const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("./db/db");

const port = process.env.PORT || 3500;
const authRoute = require("./routes/auth");
const placeRoute = require("./routes/place");
const hotelRoute = require("./routes/hotel");
const commentRoute = require("./routes/comment");

app.use(cors());
app.use(bodyParser.json());
app.use("/users", authRoute);
app.use("/places", placeRoute);
app.use("/hotels", hotelRoute);
app.use("/comments", commentRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
