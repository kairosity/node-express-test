const express = require('express')
const mongoose = require('mongoose')
const env = require('./env')
const articleRouter = require('./routes/articles')
const app = express()

const mongoURL = env.mongoURL

mongoose.connect(mongoURL, {
    useNewUrlParser: true, useUnifiedTopology: true })

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

// Current index route.
app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description'
    }, 
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test Description 2'
    }]
    res.render('articles/index', { articles: articles })
})


app.listen(5000)