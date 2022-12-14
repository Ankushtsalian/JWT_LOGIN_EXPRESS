const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new CustomAPIError("No Token provided", 401);

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username }; //this will be passed to dashboard route as a req
    next();
  } catch (error) {
    throw new CustomAPIError("NOT AUTHORIZED TO ACCESS THIS ROUTE", 401);
  }
};

module.exports = authenticationMiddleware;
