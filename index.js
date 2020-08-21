const express = require('express');
const app = express();
const path = require('path');
//port running on
const PORT = process.env.PORT || 5000;
const municipalities = [
    {
        id: 1,
        name: "Buffalo City Metropolitan Municipality",
        province: "Eastern Cape"
    },
    {
        id: 2,
        name: "City of Cape Town Metropolitan Municipality",
        province: "Western Cape"
    },
    {
        id: 3,
        name: "City of Johannesburg Metropolitan Municipality",
        province: "Gauteng"
    },
    {
        id: 4,
        name: "City of Tshwane Metropolitan Municipality",
        province: "Gauteng"
    },
    {
        id: 5,
        name: "Ekurhuleni Metropolitan Municipality",
        province: "Gauteng"
    },
    {
        id: 6,
        name: "eThekwini Metropolitan Municipality",
        province: "KwaZulu-Natal"
    },
    {
        id: 7,
        name: "Mangaung Metropolitan Municipality",
        province: "Free State"
    },
    {
        id: 8,
        name: "Nelson Mandela Bay Metropolitan Municipality",
        province: "Eastern Cape"
    }
];
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