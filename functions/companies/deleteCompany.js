const Company = require('../../models/Company');

module.exports = (req, res, next) => {
    try{
        Company.findByIdAndDelete(req.profile._id)
        .then(()=> res.json('user deleted'))
        .then(err => res.status(400).json('error: '+  err));

    }catch (error) {
        console.error(error);
        return res.status(500).json("Server Error...");
    }


};
