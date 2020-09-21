const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')
require('dotenv/config');

app.use(bodyParser.json());

// Import Routes
const dweetsRoute = require('./routes/dweets');
const authRoute = require('./routes/auth');

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use('/dweet', dweetsRoute);
app.use('/api/user', authRoute);

app.use('/', express.static('react_build'))
app.use('/specific-dweet/', express.static('react_build'))
app.use('/login/', express.static('react_build'))
app.use('/create-dweet/', express.static('react_build'))
app.use('/register/', express.static('react_build'))

// ROUTES
app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.get('/specific-dweet/', (req, res) => {
    res.sendFile('index.html')
})
app.get('/login/', (req, res) => {
    res.sendFile('index.html')
})
app.get('/create-dweet/', (req, res) => {
    res.sendFile('index.html')
})
app.get('/register/', (req, res) => {
    res.sendFile('index.html')
})

// app.get('/dweets', (req, res) => {
//     res.send("We are on dweets")
// })

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true , useUnifiedTopology: true }, 
    () => console.log("Connected to DB"))

app.listen(5000);
// DB_CONNECTION=mongodb://127.0.0.1:27017/elite-section-4