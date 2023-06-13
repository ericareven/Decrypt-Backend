const router = require('express').Router()
const { postCtrl } = require('../controllers')
// const { profileCtrl } = require('../controllers')
// const { userCtrl } = require('../controllers')
// const { protect } = require('../middleware/auth')

router.get('/', postCtrl.getPost)
router.post('/', postCtrl.createPost)
router.put('/:id', postCtrl.editPost)
router.delete('/:id', postCtrl.deletePost)

module.exports = router;