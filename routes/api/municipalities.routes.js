const express = require("express");
const router = express.Router();
const moment = require("moment");
const uuid = require("uuid");
const municipalities = require("../../municipalitiesData");

//Get all municipalities
router.get("", function(req,res){
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

//Posting new Object data
router.post("/", (req, res) => {
    // res.send(req.body);
    // console.log(req.body);
    const newMunicipality = {
        id: uuid.v4(),
        name: req.body.name,
        province: req.body.province
    };
    if(!newMunicipality.name || !newMunicipality.province){
       return res.status(400).json({
            msg: "Please include the name of the municipality and the province"
        });
    }
    municipalities.push(newMunicipality);
    res.json(municipalities);
});

//Updating an Object 
router.put("/", (req, res) => {
    const existingMunicipality = {
        id: uuid.v4(),
        name: req.body.name,
        province: req.body.province
    };
    if(!existingMunicipality.name || !existingMunicipality.province){
       return res.status(400).json({
            msg: "Please include the name of the municipality and the province"
        });
    }

    const found = municipalities.some(municipalities => municipalities.name == existingMunicipality.name);
    if(found==true){
        for(municipality of municipalities){
            if(existingMunicipality.name == municipality.name){
                console.log(`This is the municipality ${municipality.name} to update`);
                municipality.province = existingMunicipality.province;
                res.json(municipalities);
            } 
        }
    }
    else{
        console.log(`The municipality ${existingMunicipality.name} is not found, therefore added`);
        municipalities.push(existingMunicipality);
        res.json(municipalities);
    }
});

//Deleting an object 
router.delete("/:id", (req, res) => {
    const found = municipalities.some(municipalities => municipalities.id == req.params.id);
    if(found==true){
        for(municipality of municipalities){
            if(municipality.id==req.params.id){
                const index = municipalities.findIndex(municipality => municipality.id == req.params.id);
                municipalities.splice(index, 1);
                res.json({
                    message: `Municipality ${req.params.id} ID is deleted`
                });
            }
        }   
    }
    else{
        res.status(400).json({
            message: `Municipality with ${req.params.id} ID was not found ${moment().format()}`
        });
    }
});

module.exports = router;