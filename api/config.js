const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    mongoSchema: process.env.RUSHER_DB
};