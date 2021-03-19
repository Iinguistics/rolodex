const mongoose = require('mongoose');

const viewerSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name:{
       type: String,
       required: true
    },
    rating:{
        type: Number,
        required: true
    },
    followingSince:{
        type: String,
        required: true
    },
    personalityType:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    notes:{
        type: String,
        required: true
    },


 
}, {
    timestamps: true
});

const viewer = mongoose.model('viewer', viewerSchema);
module.exports = viewer;