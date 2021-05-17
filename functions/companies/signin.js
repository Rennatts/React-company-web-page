const Company = require('../../models/Company');
const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports = (req, res) => {
    const {email, password} = req.body;
    require("dotenv").config();


    Company.findOne({email}, (err, company)=> {
        if(err || !company ) {
            return res.status(401).json({
                error: "email not registered, please register"
            })
        }

        if(!company.authenticate(password)) {
            return res.status(401).json({
                error: "email and password do not match"
            })
        }

        const token = jwt.sign({_id: company._id}, process.env.JWT_SECRET);

        res.cookie("t", token, {expire: new Date() + 9999})

        const {_id, company_name, email} = company;
        return res.json({token, user: {_id, email, company_name}});
    });
    
};
