const express = require('express');
const router = express.Router();

router.post('/getData', (req, res) => {

    try{

        console.log(global.foodItems);
        res.send([global.foodItems, global.foodCategories]);
  
    }catch (err)
    {
        res.send('Error ' + err);
    }
});

module.exports = router;