const mongoose = require('mongoose');


//schema
const Schema = mongoose.Schema;
const PostCompaniesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


//model
const PostCompanies = mongoose.model('PostCompanies', PostCompaniesSchema);

module.exports = PostCompanies;
