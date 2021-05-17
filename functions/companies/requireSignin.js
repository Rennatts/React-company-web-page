require("dotenv").config();
const expressJwt = require('express-jwt');


module.exports = expressJwt({
    //if the token is valid, express jwt appends the verified users id
    //in an auth key to the request object
    secret: process.env.JWT_SECRET,
    userProperty: "auth", 
    algorithms: ['sha1', 'RS256', 'HS256']
});
