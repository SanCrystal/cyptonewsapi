//require mongoose
const mongoose = require('mongoose');
//create new schema
const newsFeedSchema = mongoose.Schema({
    source: { type: String, required: true, unique: false, trim: true },
    title: { type: String, required: true, unique: true, trim: true },
    url: { type: String, required: true, unique: false, trim: true },
    image: { String, required: true, unique: true, trim: true },
    releaseDate: { type: String, required: false, unique: false, trim: true },
    aritcleSource: { type: String, required: true, unique: false, trim: true },

}, { timestamps: true })

//create model
const newsfeed = mongoose.model("newsfeed", newsFeedSchema);
//export model
module.exports = newsfeed;