const express = require("express");
const moment = require("moment");
const app = express();
const path = require("path");
//port running on
const PORT = process.env.PORT || 5000;
const municipalities = require("./municipalitiesData");
const logger = require("./middlewear/logger");
const bodyParser = require('body-parser');


//Body parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

const router = require("./routes/api/municipalities.routes");
//const router = require("./routes/api/employee.routes");

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

//Municipalities API routes
app.use("/api/municipalities", require("./routes/api/municipalities.routes"));
//app.use("/api/employees", require("./routes/api/employee.routes"));


app.listen(PORT, () => console.log(`Hello World Express App listening on Port: ${PORT}`));