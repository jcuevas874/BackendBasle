require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT
const connection = require("./connection.js")

app.use(express.json());
app.use(express.urlencoded({extended: true}));

connection.query('SELECT * FROM product', (err, results, fields) => {
if(error)
throw error;

results.forEach(result => {
    console.log(result)
    })
})

app.listen(port, () => console.log(`Server running on port ${port}`));