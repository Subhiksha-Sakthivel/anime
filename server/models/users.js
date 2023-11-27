const { Double } = require('mongodb');
const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    mal_score: {
        type: Number,
        required: true,
        trim: true
    },
    rank: {
        type: Number,
        required: true,
        trim: true
    },
    pop: {
        type: Number,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('anime', animeSchema);
