const express = require('express')
const router = express.Router()

const {
  register,
  signin,
  findMe,
} = require('../controllers/userCtrls')
const { protect } = require('../middleware/auth')

router.post('/register', register)
router.post('/signin', signin)
router.get('/me', protect, findMe)

module.exports = router