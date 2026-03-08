const User = require('../models/user.model')

// GET all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password')
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// GET one user
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ error: "User not found" })
    res.json(user)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// POST create user
const createUser = async (req, res) => {
  try {
    // Validation
    if (!req.body.name) {
      return res.status(400).json({ error: "Name is required! ❌" })
    }
    if (!req.body.age) {
      return res.status(400).json({ error: "Age is required! ❌" })
    }

    // Save to MongoDB
    const newUser = await User.create({
      name: req.body.name,
      age: req.body.age
    })

    res.status(201).json(newUser)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// DELETE user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) return res.status(404).json({ error: "User not found" })
    res.json({ message: "User deleted successfully ✅" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// UPDATE user
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!user) return res.status(404).json({ error: "User not found" })
    res.json(user)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = { getAllUsers, getUserById, createUser, deleteUser, updateUser }
