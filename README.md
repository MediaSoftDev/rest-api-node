# REST API NODE
## Description

This repository is a Application software with Nodejs, Express, MongoDB, this application contains an REST API.

## Installation
Using Nodejs, Express, Mongoose preferably.

## DataBase
Using MongoDB preferably.

## Apps
Using Postman or RestEasy to feed the api.

## Usage
```html
$ git clone https://github.com/DanielArturoAlejoAlvarez/rest-api-node.git [NAME APP] 

$ npm install

$ npm start
```
Follow the following steps and you're good to go! Important:


![alt text](http://m03s6dh33i0jtc3uzfml36au-wpengine.netdna-ssl.com/wp-content/uploads/mocha-fail-2.gif)


## Coding

### DB

```javascript
...
mongoose.connect(config.db,{useNewUrlParser: true},function(){})
.then(()=>{console.log('Connected to Database')})
.catch(err=>{console.log(`Not Connected to Database ERROR!, ${err}`)})
...
```

### Models

```javascript
...
const PostSchema=new Schema({
    title: String,
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
...
```

### Controllers

```javascript
...
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
...
```

### Routes

```javascript
...
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
...
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DanielArturoAlejoAlvarez/rest-api-node. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).