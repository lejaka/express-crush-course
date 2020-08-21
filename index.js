const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Hello World Express App listening on Port: ${PORT}`));