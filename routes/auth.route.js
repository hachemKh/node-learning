const express = require('express')
const router = express.Router()

const { register, login } = require('../controllers/auth.controller')
const protect = require('../middleware/auth.middleware')

router.post('/register', register)
router.post('/login', login)

// Protected route — only logged in users can access
router.get('/profile', protect, (req, res) => {
  res.json({
    message: "Welcome to your profile! ✅",
    userId: req.user.id
  })
})

module.exports = router
