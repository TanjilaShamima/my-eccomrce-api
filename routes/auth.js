const { registerNewUser, loginUser } = require("../controller/authController");
const User = require("../models/User");

const router = require("express").Router();

//REGISTER
router.post("/register", registerNewUser);

//LOGIN
router.post("/login", loginUser);

module.exports = router;
