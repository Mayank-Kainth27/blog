const mongoose = require('mongoose');
const { Schema } = mongoose;


const BlogSchema = new Schema({
    title: String,
    body: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateCreated: Date
});

mongoose.model('blogs', BlogSchema);