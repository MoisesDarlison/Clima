const express = require('express');
const app = express();
const port = 3333;

app.listen(port, ()=> console.log(`Server Up in port ${port}`))
