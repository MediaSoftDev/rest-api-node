'use strict'

const router=require('express-promise-router')()

const {getPosts,getPost,createPost,replacePost,updatePost,destroyPost,getPostsCategories,createPostCategory} = require('../controllers/Posts')

router.get('/posts', getPosts)
router.get('/posts/:postId', getPost)
router.post('/posts', createPost)
router.put('/posts/:postId', replacePost)
router.patch('/posts/:postId', updatePost)
router.delete('/posts/:postId', destroyPost)

router.get('/posts/:postId/categories', getPostsCategories)
router.post('/posts/:postId/categories', createPostCategory)

module.exports=router