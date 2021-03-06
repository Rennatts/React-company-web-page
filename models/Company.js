const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');


//schema
const Schema = mongoose.Schema;
const CompanySchema = new Schema({
    company_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    about: {
        type: String,
        trim: true,
    },
    hashed_password: {
        type: String,
        trim: true,
        required: true,
    },
    salt: {
        type: String,
    },
    city: {
        type: String,
        trim: true,
        required: true
    },
    state:{
        type: String,
        trim: true,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    zip_code: {
        type: String,
        trim: true,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
    }

});




//virtual field
CompanySchema.virtual('password')
.set(function(password) {
    //create temporary variable called _password
    this._password = password
    //generate a timestamp
    this.salt = uuidv4()
    //encryptPassword
    this.hashed_password = this.encryptPassword(password)
})
.get(function() {
    return this._password;
});


//methods
CompanySchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: function(password) {
        if(!password) return "";
        try {
            return crypto.createHmac('sha1', this.salt)
            .update(password)
            .digest('hex');
        } catch(err) {
            return "";
        }
    }
};


CompanySchema.pre('save', function(){
    if(!this.url) {
        this.url = `${process.env.APP_URL}/files/${this.key}`;
    }
});


CompanySchema.pre('remove', function() {
    if(process.env.STORAGE_TYPE === "s3"){
        return s3.deleteObject({
            Bucket: 'my-first-buker',
            Key: this.key,
        }).promise()
    } else {
        return promisify(fs.unlink)(path.resolve(__dirname, "..", "uploads", this.key));

    }
});


//model
const Company = mongoose.model('Companies', CompanySchema);


module.exports = Company;
