const express = require('express')
const router = express.Router()

const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser
} = require('../controllers/users.controller')

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

module.exports = router
