//authMiddleware.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1]; // for "Bearer <token>" format

  if (!token) return res.status(401).json({ msg: 'Access Denied' });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ msg: 'Invalid Token' });
  }
}

function verifyAdmin(req, res, next) {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ msg: 'Admin access only' });
  }
  next();
}

module.exports = authMiddleware; // 👈 This is what applicantRoutes expects
module.exports.verifyAdmin = verifyAdmin; // 👈 You still export admin check for oth