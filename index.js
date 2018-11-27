'use strict'

const express=require('express'),
      morgan=require('morgan'),
      mongoose=require('mongoose'),
      app=express(),
      cors=require('cors')

const config=require('./config')
const api=require('./routes')

mongoose.connect(config.db,{useNewUrlParser: true},function(){})
.then(()=>{console.log('Connected to Database')})
.catch(err=>{console.log(`Not Connected to Database ERROR!, ${err}`)})

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/api', api)

app.get('/', (req,res)=>{
    res.send('Hello World!')
})

app.listen(config.port, ()=>{
    console.log(`Server running in port: ${config.port}`)
})