const Company = require('./../../models/Company');


module.exports = function(req, res, next){
    const { size, key, location: url = ""} = req.file;
    console.log(req.params.companyId);
    Company.findByIdAndUpdate(req.params.companyId, 
        {$set: 
            {
                name: req.file.originalname,
                size,
                key,
                url,
                updated: Date.now(),
                company_name: req.body.company_name,
                about: req.body.about,
                password: req.body.password,
            }},
            {new: true},
            function(err, company){
                if(err) {
                    res.json({error: err});
                }else{
                    comapany.hashed_password = undefined;
                    comapany.salt = undefined;
                    res.send(comapany);
                    console.log(comapany);
                }
            }
    );

};