const express = require('express');
const app = express();
const path = require('path');
//port running on
const PORT = process.env.PORT || 5000;
const municipalities = require("./Municipalities");
//adding route
//function vs arrow function
// app.get('/', function(req,res){

// });
// app.get('/', (req,res) => {
//    // res.send("Hello World from Node Express. :-)");
//     res.sendFile(path.join(__dirname, "public","index.html"));
// });

//Using static folder with html pages
app.use(express.static(path.join(__dirname, "public")));

//Get all municipalities
app.get('/api/municipalities', function(req,res){
    res.json(municipalities);
});

app.listen(PORT, () => console.log(`Hello World Express App listening on Port: ${PORT}`));