const Company = require('./../../models/Company');


module.exports = (req, res)=> {
    Company.find((err, users) => {
        if(err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({users})
    }).select("company_name email updated created url key");
};