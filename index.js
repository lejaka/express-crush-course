const express = require("express");
const moment = require("moment");
const app = express();
const path = require("path");
//port running on
const PORT = process.env.PORT || 5000;
const municipalities = require("./municipalities");
const logger = require("./middlewear/logger");
const router = require("./routes/api/municipalities");

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
app.use("/api/municipalities", require("./routes/api/municipalities"));

app.listen(PORT, () => console.log(`Hello World Express App listening on Port: ${PORT}`));