const Company = require('../../models/Company');

module.exports = async(req, res) => {
    try{
        let {company_name, email, password, city, state, address, zip_code } = req.body;
        let companyExists = await (Company.findOne({email}));
        
        if(companyExists) return res.status(401).send("email already registered");
    
        const company = await new Company({
            company_name,
            email,
            password,
            city, 
            state, 
            address, 
            zip_code
        });
    
        await company.save();
        res.status(200).json({company});

    } catch(error){
        console.log(error.message);
        return res.status(500).send("server error");
    }

    res.send('user is created!');

};