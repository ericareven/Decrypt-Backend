const router = require('express').Router()
const { postCtrl } = require('../controllers')
// const { profileCtrl } = require('../controllers')
// const { userCtrl } = require('../controllers')
const { protect } = require('../middleware/auth')

router.get('/', postCtrl.getPost)
router.post('/:id', postCtrl.createPost)
router.put('/:id', postCtrl.updatePost)
router.delete('/:id', postCtrl.deletePost)

module.exports = router;