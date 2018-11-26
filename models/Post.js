'use strict'

const mongoose=require('mongoose')
const moment=require('moment')
const Schema=mongoose.Schema

const PostSchema=new Schema({
    title: String,
    desc: String,
    picture: String,
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }
    ],
    state: Boolean,
    dateReg: {type: Date, default: Date.now()}
})

module.exports=mongoose.model('Post',PostSchema)