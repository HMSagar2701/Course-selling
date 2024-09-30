const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.header("Authorization");

  // Check if authorization header is present
  if (!authHeader) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Split the 'Bearer <token>' format and extract the token
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Token missing, authorization denied" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Store decoded user data in request object
    next(); // Proceed to next middleware
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
