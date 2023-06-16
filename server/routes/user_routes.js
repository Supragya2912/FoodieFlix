const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//create a user
router.post('/createUser',

            [
                body('name').isLength({ min: 3 }),
                body('email').isEmail(),
                body('password').isLength({ min: 5 }),
            ],

    async (req, res) => {
        
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                location: req.body.location,
            })

            res.json({ message: "User created successfully" });
        } catch (err) {
            res.send('Error ' + err);
            res.json({ message: "User not created" });
        }
    });

module.exports = router;