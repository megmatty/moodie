const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    mood: String,
    activity: String,
    journal: String,
    date: String
});

module.exports = mongoose.model('Entry', EntrySchema);