const express = require('express');
const PostCompanies = require('./models/PostCompanies');

const router = express.Router();

//routes
router.get('/', (req,res)=> {

    PostCompanies.find({})
    .then((data)=> {
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=> {
        console.log('error: ', daerrorta);
    })
    
});


router.post('/save', (req,res)=> {
    console.log('Body: ', req.body)
    const data = req.body;

    const newPost = new BPostCompanies(data);

    newPost.save((error)=> {
        if(error){
            res.status(500).json({msg: "sorry internal server error"});
            return;    
        }

        return res.json({
            mes: "Your data has been saved"
        });
        
    });
});



router.get('/company', (req,res)=> {
    const data = {
        name: "Frodo", 
        age: 70
    };
    res.json(data);
});

module.exports = router;