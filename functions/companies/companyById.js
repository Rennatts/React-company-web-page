const Company = require('./../../models/Company');


module.exports = (req, res, next, id) => {
    Company.findById(id)
    .exec((err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: "user not found"
            });
        }
        req.profile = user 
        next();
    });
    
};