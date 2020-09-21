const express = require('express')
var router = express.Router()

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get('/:name', (req, res) => {
    var name = req.params.name
    res.send(`Hello, ${name}!`);
})

module.exports = router