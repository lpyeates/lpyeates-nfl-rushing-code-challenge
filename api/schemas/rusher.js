const mongoose = require('mongoose');

const { Schema } = mongoose;

const rusher = new Schema({
    player: {
        type: String,
        require: true,
    },
    team: {
        type: String,
        require: true,
    },
    pos: {
        type: String,
        require: true,
    },
    att: {
        type: Number,
        require: true,
    },
    attperg: {
        type: Number,
        require: true,
    },
    yds: {
        type: Number,
        require: true,
    },
    avg: {
        type: Number,
        require: true,
    },
    ydsperg: {
        type: Number,
        require: true,
    },
    td: {
        type: Number,
        require: true,
    },
    long: {
        type: Number,
        require: true,
    },
    first: {
        type: Number,
        require: true,
    },
    firstpercentage: {
        type: Number,
        require: true,
    },
    twentyplus: {
        type: Number,
        require: true,
    },
    fortyplus: {
        type: Number,
        require: true,
    },
    fumbles: {
        type: Number,
        require: true,
    },
});

module.exports =  mongoose.model('Rusher', rusher);
