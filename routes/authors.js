const express = require('express')
const router = express.Router()

//For all authors
router.get('/', (req, res) => {
    res.render('authors/index')
})

//For new author
router.get('/new', (req, res) => {
    res.render('authors/new')
})

//For creating new author route
router.get('/new', (req, res) => {
    res.render('authors/new')
})

module.exports = router