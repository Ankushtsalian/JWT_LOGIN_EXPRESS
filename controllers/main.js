const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    throw new CustomAPIError("Please provide email and password", 400);

  //need id to create a signature
  const id = new Date().getDate();

  //keep payload small
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `HELLO JOHN`,
    secret: `Here is your authorized data, Your luckky number is ${luckyNumber}`,
  });
};

module.exports = { dashboard, login };
