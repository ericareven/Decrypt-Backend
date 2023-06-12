const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')

const register = async (req, res) => {
  const { name, username, email, password } = req.body

  if (!name || !username || !email || !password) {
    res.status(400)
    throw new Error('Please complete all fields')
  }

  // Check if user exists
  try {
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
      }
    
      // Hash password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
    
      // Create user
      const user = await User.create({
        name,
        username,
        email,
        password: hashedPassword,
      })
      if (user) {
        res.status(201).json({
          _id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          token: generateToken(user._id),
        })
      } else {
        return res.status(400).json({ message: 'Invalid user data' })
      }
  } catch (error) {
        next(error);
  }
  
}

const signin = async (req, res) => {
  const { email, password } = req.body

  try {
    const generateToken = (id) => {
        return jwt.sign({ id }, process.env.JWT_SECRET, {
          expiresIn: '30d',
        });
      };
    
      // Check for user email
      const user = await User.findOne({ email })
    
      if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
          _id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          token: generateToken(user._id),
        })
      } else {
        return res.status(400).json({ message: 'Invalid credentials' })
      }
    } catch (error) {
    next(error);
    }
}


const findMe = (async (req, res) => {
  res.status(200).json(req.user)
})


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  register,
  signin,
  findMe,
}