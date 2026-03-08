const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// REGISTER
const register = async (req, res) => {
  try {
    // Validation
    if (!req.body.name) {
      return res.status(400).json({ error: "Name is required! ❌" })
    }
    if (!req.body.email) {
      return res.status(400).json({ error: "Email is required! ❌" })
    }
    if (!req.body.password) {
      return res.status(400).json({ error: "Password is required! ❌" })
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email: req.body.email })
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists! ❌" })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    // Create user
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })

    res.status(201).json({
      message: "User registered successfully! ✅",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    })

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// LOGIN
const login = async (req, res) => {
  try {
    // Validation
    if (!req.body.email) {
      return res.status(400).json({ error: "Email is required! ❌" })
    }
    if (!req.body.password) {
      return res.status(400).json({ error: "Password is required! ❌" })
    }

    // Check if user exists
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(404).json({ error: "User not found! ❌" })
    }

    // Check password
    const isCorrect = await bcrypt.compare(req.body.password, user.password)
    if (!isCorrect) {
      return res.status(400).json({ error: "Wrong password! ❌" })
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    res.json({
      message: "Login successful! ✅",
      token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    })

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = { register, login }
