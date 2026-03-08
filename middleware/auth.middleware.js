const jwt = require('jsonwebtoken')

const protect = (req, res, next) => {
  try {
    // Get token from header
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
      return res.status(401).json({ error: "No token! Please login! ❌" })
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Add user to request
    req.user = decoded

    next()

  } catch (err) {
    res.status(401).json({ error: "Invalid token! ❌" })
  }
}

module.exports = protect
