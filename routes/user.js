const express = require('express')
const router = express.Router()

const {
  register,
  login,
  findMe,
} = require('../controllers/userCtrls')
const { protect } = require('../middleware/auth')

router.post('/register', register)
router.post('/login', login)
router.get('/me', protect, findMe)

module.exports = router