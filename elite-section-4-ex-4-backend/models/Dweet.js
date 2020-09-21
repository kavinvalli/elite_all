const mongoose = require('mongoose');


const DweetSchema = mongoose.Schema({
    dweet: {
        type: String,
        required: true,
        minlength: 140,
        maxlength: 140
    },
    posted_by: {
        type: String,
        required: true
    },
    last_updated_at: {
        type: Date,
        default: Date.now
    }
})

DweetSchema.pre('updateOne', next => {
    now = new Date();
    this.last_updated_at = now;
    next();
})

module.exports = mongoose.model('Dweets', DweetSchema);