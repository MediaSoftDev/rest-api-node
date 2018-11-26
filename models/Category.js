'use strict'

const mongoose=require('mongoose')
const moment=require('moment')
const Schema=mongoose.Schema

const CategorySchema=new Schema({
    name: String,
    displayPost: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    state: Boolean,
    dateReg: {type: Date, default: Date.now()}
})

module.exports=mongoose.model('Category',CategorySchema)