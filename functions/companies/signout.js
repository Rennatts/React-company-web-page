const Company = require('./../../models/Company');


module.exports = (req, res) => {
    res.clearCookie("t")
    return res.json({message: "signout success"})
};