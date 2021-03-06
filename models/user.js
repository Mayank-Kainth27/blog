const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String,
    firstName: String,
    lastName: String,
    facebookId: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);