require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT_SERVER || 3333;

const route = require('./routes/routes')


app.use(express.json())
app.use(route);

app.listen(port, ()=> console.log(`Server Up in port ${port}`))