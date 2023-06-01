const router = require('express').Router()
const postRoute = require('./posts')

router.use('/post', postRoute)

module.exports = router;