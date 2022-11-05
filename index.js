const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRoute = require("./routes/user");
const authRoute = require("./routes/auth")
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("successful"))
  .catch((e) => console.log(e));

app.use("/api/user", UserRoute);
app.use("/api/auth", authRoute)



app.listen(PORT, () => {
  console.log("Backend server is running on............. ", PORT);
});
