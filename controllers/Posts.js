'use strict'

const Post=require('../models/Post')
const Category=require('../models/Category')

module.exports={
    getPosts: async (req,res,next)=>{
        const posts = await Post.find({})
        console.log(posts)
        res.status(200).json({posts})
    },
    getPost: async (req,res,next)=>{
        const {postId} = req.params
        const post = await Post.findById(postId)
        console.log(post)
        res.status(200).json({post})
    },
    createPost: async (req,res,next)=>{
        const newPost = new Post(req.body)
        const post = await newPost.save()
        console.log(post)
        res.status(200).json({post})
    },
    replacePost: async (req,res,next)=>{
        const {postId} = req.params
        const newPost = new Post(req.body)
        const oldPost = await Post.findByIdAndUpdate(postId,newPost)
        res.status(200).json({success: true})
    },
    updatePost: async (req,res,next)=>{
        const {postId} = req.params
        const newPost = new Post(req.body)
        const oldPost = await Post.findByIdAndUpdate(postId,newPost)
        res.status(200).json({success: true})
    },
    destroyPost: async (req,res,next)=>{
        const {postId} = req.params 
        const post = await Post.findByIdAndRemove(postId)
        res.status(200).json({post})
    },

    getPostsCategories: async (req,res,nex)=>{
        const {postId} = req.params
        const post = await Post.findById(postId).populate('categories')
        res.status(200).json({post})
    },

    createPostCategory: async (req,res,next)=>{
        const {postId} = req.params 
        const newCategory = new Category(req.body)
        const post = await Post.findById(postId)
        newCategory.displayPost=post
        await newCategory.save()
        post.categories.push(newCategory)
        await post.save()
        res.status(201).json({newCategory})
    }

}


