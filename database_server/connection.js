const details = require('../keys.js');
const mysql = require('mysql');

module.exports = mysql.createConnection(details);
