const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const usersRoute = require('./routes/users.route')
const authRoute = require('./routes/auth.route')

const app = express()
app.use(express.json())
app.use(cors())

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected! 🗄️✅'))
  .catch(err => console.log('MongoDB Error:', err))

// Routes
app.use('/users', usersRoute)
app.use('/auth', authRoute)

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT} 🚀`)
})
