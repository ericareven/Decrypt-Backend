const router = require('express').Router()
const postRoute = require('./posts')
// const userRoute = require('./users')
// const authRoute = require('./auth')

router.use('/', postRoute)
// router.use('/users', userRoute)
// router.use('/auth', authRoute)

module.exports = router;