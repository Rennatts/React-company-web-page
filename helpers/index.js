const { check, validationResult } = require('express-validator');


exports.userSignupValidator = (req, res, next) => {
    //name is not null and between 4-10 characters
    req.check("company_name", "Company name is required").notEmpty();

    //check for password
    req.check("email", "email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("email must contain @")
    .isLength({
        min: 4,
        max: 2000
    });

    //check for passwords
    req.check("password", "password is required").notEmpty();
    req.check("password")
    .isLength({min: 6})
    .withMessage("password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("password must contain a number");

    //check for errors
    const errors = req.validationErrors();

    //if error show the first one as they happen
    if(errors){
        const firstError = errors.map((error)=> error.msg)[0]
        return res.status(400).json({error: firstError})
    };

    // proceed to next middleware
    next();

};
