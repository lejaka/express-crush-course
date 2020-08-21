const express = require("express");
const moment = require("moment");
const app = express();
const path = require("path");
//port running on
const PORT = process.env.PORT || 5000;
const municipalities = require("./municipalities");
const logger = require("./middlewear/logger");

//adding route
//function vs arrow function
// app.get('/', function(req,res){

// });
// app.get('/', (req,res) => {
//    // res.send("Hello World from Node Express. :-)");
//     res.sendFile(path.join(__dirname, "public","index.html"));
// });

//Using Middlewear
app.use(logger);

//Using static folder with html pages
app.use(express.static(path.join(__dirname, "public")));

//Get all municipalities
app.get("/api/municipalities", function(req,res){
    res.json(municipalities);
});

//Get a single municipality by ID
app.get("/api/municipalities/:id", (req, res) => {
    //Sending the parameters from the request as a response
    //res.send(req.params.id);
    //Some returns true or false in order to check if the user with ID exists or not 
    const found = municipalities.some(municipalities => municipalities.id ===  parseInt(req.params.id));
    if(found==true){
        res.json(municipalities.filter(municipalities => municipalities.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({
            message: `Municipality with that ID was not found ${moment().format()}`
        });
    }
})

app.listen(PORT, () => console.log(`Hello World Express App listening on Port: ${PORT}`));