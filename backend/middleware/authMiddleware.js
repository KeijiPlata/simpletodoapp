const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ message: "Access Denied: No Token Provided" });

  // Remove the "Bearer " prefix if it exists and verify the token
  const tokenWithoutBearer = token.startsWith("Bearer ") ? token.slice(7) : token;

  try {
    // Verify the token using the JWT_SECRET
    const verified = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
    req.user = verified; 
    next(); 
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};
