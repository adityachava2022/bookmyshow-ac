const jwt = require("jsonwebtoken");

const validateJWTToken = (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];
    // we will get a decoded token once we verify
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // date.now will be in ms so we need to convert it to seconds
    const currentTime = Math.floor(Date.now() / 1000);
    const expTime = decoded.exp; // this will be in seconds
    if (currentTime > expTime) {
      // the token got expired
      res.status(401).send({ success: false, message: "Expired Token" });
    }
    // if within the time limit, assign userId form decoded token info
    req.body.userId = decoded?.userId;
    next();
  } catch (error) {
    res.status(401).send({ success: false, message: "Invalid/Expired Token" });
  }
};

module.exports = { validateJWTToken };
