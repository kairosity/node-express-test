const express = require('express')
const article = require('./../models/article.js')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('articles/new')
})

router.post('/', (req, res) => {
    const article = new Article({
        title
    })
})

module.exports = router