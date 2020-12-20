require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT_SERVER || 3333;

app.listen(port, ()=> console.log(`Server Up in port ${port}`))