const mongoose = require('mongoose');

const viewerSnapshotSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    chatter_count:{
       type: Number,
       required: true
    },
    stream_title:{
        type: String,
        required: true
     }
 
}, {
    timestamps: true
});

const ViewerSnapshot = mongoose.model('ViewerSnapshot', viewerSnapshotSchema);
module.exports = ViewerSnapshot;