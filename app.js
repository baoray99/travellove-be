const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("./db/db");

const port = process.env.PORT || 3500;
const authRoute = require("./routes/auth");
const placeRoute = require("./routes/place");
const hotplaceRoute = require("./routes/hotplace");
const hotelRoute = require("./routes/hotel");
const foodRoute = require("./routes/food");
const commentRoute = require("./routes/comment");
const favRoute = require("./routes/favourite");

app.use(cors());
app.use(bodyParser.json());
app.use("/users", authRoute);
app.use("/places", placeRoute);
app.use("/hotplaces", hotplaceRoute);
app.use("/hotels", hotelRoute);
app.use("/foods", foodRoute);
app.use("/comments", commentRoute);
app.use("/favourite", favRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
