const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRoute = require("./routes/user");
const PORT = process.env.PORT || 5000;

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("successful"))
  .catch((e) => console.log(e));

app.use("/api/user", UserRoute);

app.get("/api/test", (req, res) => {
  res.send("Helllllooo");
});

app.listen(PORT, () => {
  console.log("Backend server is running on............. ", PORT);
});
