const login = async (req, res) => {
  res.send("FAKE Login/reg/signup route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `HELLO JOHN`,
    secret: `Here is your authorized data, Your luckky number is ${luckyNumber}`,
  });
};

module.exports = { dashboard, login };
