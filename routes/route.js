const postController = require('../controllers/controller')
const validator = require('../helpers/helper')
const express = require('express')

const router = express.Router()


router.get('/', postController.getPost)
router.post('/post', validator.createPostValidator, postController.createPost)



module.exports = router