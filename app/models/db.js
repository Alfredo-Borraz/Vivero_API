const mysql = require('mysql');
const dbConfig = require('../config/db.config');

let connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PWD,
    database: dbConfig.DB
});

module.exports = connection;