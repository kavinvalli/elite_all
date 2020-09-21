const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;
const routes = require('./routes');


app.get('/', (req, res) => {
    res.send('Please go to /hello')
})

app.use('/hello', routes);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})