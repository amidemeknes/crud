//Connection a la Base de Donnée

var mysql = require('mysql');
var connection = mysql.createPool({
    //connectionLimit : 50  //<= limite de connection par sec a la bdd
   
    // host: 'localhost',
    // user: 'root',
    // port: 3306,
    // password: '',
    // database: 'produit_db'

    host: '72.9.135.10',
    user: 'era_crud',
    port: 3306,
    password: '8Pf_hQ?L_#J9',
    database: 'era_crud'
});

module.exports = connection;