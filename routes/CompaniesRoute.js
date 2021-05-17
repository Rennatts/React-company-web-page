const express = require('express');
const router = express.Router();
const { userSignupValidator } = require('./../helpers');
const register = require('./../functions/companies/register');
const signin = require('./../functions/companies/signin');
const signout = require('./../functions/companies/signout');
const companyById = require('./../functions/companies/companyById');
const allCompanies = require('./../functions/companies/allCompanies');
const requireSingin = require('./../functions/companies/requireSignin');
const getCompany = require('./../functions/companies/getCompany');
const updateCompany = require('./../functions/companies/updateCompany');
const deleteCompany = require('./../functions/companies/deleteCompany');


const multer = require("multer");
const crypto = require('crypto');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
require('dotenv').config();
const multerConfig = require('./../multer');



router.post('/register', userSignupValidator, register);

router.post("/signin", signin);

router.get("/signout", signout);

router.get("/allcompanies", allCompanies);

router.get("/company/:companyId", requireSingin, getCompany);

router.put("/company/:companyId", requireSingin, multer(multerConfig).single("file"), updateCompany);

router.delete("/company/:companyId", requireSingin, deleteCompany);


//any route containing :userId, our app will first execute userById()
router.param("companyId", companyById);



module.exports = router;



