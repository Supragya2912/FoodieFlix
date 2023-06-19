const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrpyt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = "thisisasecret";

//create a user
router.post('/createUser',

    [
        body('name').isLength({ min: 3 }),
        body('email').isEmail(),
        body('password').isLength({ min: 5 }),
    ],

    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrpyt.genSalt(10);
        const securePassword = await bcrpyt.hash(req.body.password, salt);

        try {
            await User.create({
                name: req.body.name,
                password: securePassword,
                email: req.body.email,
                location: req.body.location,
            })

            res.json({ message: "User created successfully" });
        } catch (err) {
            res.send('Error ' + err);
            // res.json({ message: "User not created" });
        }
    }
);

// login user

router.post('/loginUser',

    [
        body('email').isEmail(),
        body('password').isLength({ min: 5 }),
    ],

    async (req,res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;
        try{

            let userData = await User.findOne({email});
            if(!userData){
                return res.status(400).json({ errors: "Try logging in with correct credentials" });
            }

            const passwordCompare = await bcrpyt.compare(req.body.password, userData.password);
            console.log(passwordCompare);
            if(!passwordCompare){
                return res.status(400).json({ errors: "Password is incorrect"});
            }

            const data  = {
                user:{
                    id: userData.id,
                }
            }

            const authToken = jwt.sign(data, jwtSecret);
            return res.json(
              {success: true,authToken: authToken}  
            )

        }catch(error){
            res.json({success: false, error})
        }
        
    }

)

module.exports = router;