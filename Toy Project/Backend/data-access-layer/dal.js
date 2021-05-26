const mysql = require("mysql");


// Creating a connection to the database:
const connection = mysql.createConnection({

    // machine:
    host: config.mysql.host,

    // username:
    user: config.mysql.user,

    // password: 
    password: config.mysql.password,

    // database name: 
    database: config.mysql.name

});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!"); 
  });
function executeAsync(sql) {
    return new Promise((resolve, reject) => {
        connection.query(sql,(err, result) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    executeAsync
};


