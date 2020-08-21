const express = require("express");
const router = express.Router();
const moment = require("moment");
const municipalities = require("../../municipalities");

//Get all municipalities
router.get("/", function(req,res){
    res.json(municipalities);
});

//Get a single municipality by ID
router.get("/:id", (req, res) => {
    //Sending the parameters from the request as a response
    //res.send(req.params.id);
    //Some returns true or false in order to check if the user with ID exists or not 
    const found = municipalities.some(municipalities => municipalities.id ===  parseInt(req.params.id));
    if(found==true){
        res.json(municipalities.filter(municipalities => municipalities.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({
            message: `Municipality with ${req.params.id} ID was not found ${moment().format()}`
        });
    }
});

module.exports = router;