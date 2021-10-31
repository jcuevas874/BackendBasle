const mysql = require('mysql')
const {HOST, USERDB, PASSWORD, DB} = process.env

// Conecting Data: 

const connection  = mysql.createConnection({
    host: HOST,
    user: USERDB,
    password: PASSWORD,
    database: DB,
})

connection.connect(error => {
    if(error){
        throw error;
    } else {
        console.log('Connected!');
    }});

module.exports = { connection }