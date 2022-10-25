const mongoose = require('mongoose');
// const vaccination = require('./vaccination');
const memberSchema = mongoose.Schema({

    url: {
        type: String
    },
    memberName: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    adress: {
        type: String
    },
    bornDate: {
        type: Date
    },
    phone: {
        type: Number
    },
    mobilePhone: {
        type: Number
    },
    history: [{
        type: mongoose.Types.ObjectId,
        ref: 'vaccinations'
    }]
})
module.exports = mongoose.model('members', memberSchema)