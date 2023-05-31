const router = require('express').Router()
const { postCtrl } = require('../controllers')

router.get('/', postCtrl.getPost)
router.post('/', postCtrl.createPost)
router.put('/:id', postCtrl.updatePost)
router.delete('/:id', postCtrl.deletePost)

module.exports = router;