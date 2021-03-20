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
    vips: [String],
    moderators: [String],
    staff: [String],
    admins: [String],
    global_mods: [String],
    viewers: [String],

 
}, {
    timestamps: true
});

const ViewerSnapshot = mongoose.model('ViewerSnapshot', viewerSnapshotSchema);
module.exports = ViewerSnapshot;