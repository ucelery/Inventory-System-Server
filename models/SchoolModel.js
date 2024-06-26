const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
};

const schema = new mongoose.Schema({
    name: reqString,
    mission: reqString,
    vision: reqString,
    about: reqString,
    history: reqString,
    subscribed_emails: {
        type: [String],
        default: []
    },
    address: reqString,
    email: {
        type: String,
        default: ""
    },
    mobileNo: {
        type: String,
        default: ""
    },
    telNo: {
        type: String,
        default: ""
    }
});

// Define model
const SchoolModel = mongoose.model('school', schema);
module.exports = SchoolModel;