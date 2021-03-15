const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const env = require('./env')
const articleRouter = require('./routes/articles')
const app = express()

const mongoURL = env.mongoURL

mongoose.connect(mongoURL, {
    useNewUrlParser: true, useUnifiedTopology: true })

app.set('view engine', 'ejs')

// Allows us to access all params from form inside post route by referenceing the req obj.
app.use(express.urlencoded({ extended: false }))

// Current index route.
app.get('/', async (req, res) => {
    const articles = await Article.find().sort({createdAt: 'desc'})
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(5000)