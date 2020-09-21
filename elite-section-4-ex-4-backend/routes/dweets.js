const express = require('express')
const router = express.Router();
const Dweet = require('../models/Dweet');
const User = require('../models/User');
const verifyToken = require('./verify');

router.get('/s',  async (req, res) => {
    try{
        const dweets = await Dweet.find()
        // console.log(dweets)
        res.json(dweets)
    }catch(err){
        res.json({message: err})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const dweet = await Dweet.findById(req.params.id)
        res.json(dweet)
    }catch(err) {
        res.json({message: err})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedDweet = await Dweet.remove({_id: req.params.id})
        res.json(deletedDweet)
    }catch(err){
        res.json({message: err})
    }
})

router.post('/:id/update', async (req, res) => {
    try {
        const updatedDweet = await Dweet.updateOne(
            { _id:req.params.id }, 
            { 
                $set: {
                    dweet: req.body.dweet,
                    last_updated_at: Date.now()
                }
            }
        )
        res.json(updatedDweet)
    }catch(err) {
        res.json({message: err})
    }
})

router.post('/create', verifyToken, async (req, res) => {
    console.log("Request Accepted")
    console.log(req.user)
    const user = await User.findById(req.user._id)
    console.log(user.username)
    const dweet = new Dweet({
        dweet: req.body.dweet,
        posted_by: user.username
    })
    try{
        const savedDweet = await dweet.save()
        res.json({message:"Created dweet",dweet:savedDweet})
    }catch(err){
        res.json({message: err})
    }
})

module.exports = router