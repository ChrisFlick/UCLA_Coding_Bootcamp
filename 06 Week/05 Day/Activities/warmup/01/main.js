const mysql = require('mysql')

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: 'new_db'
})

connection.connect(function(err) {
    if (err) throw err;

    console.log(`Connected as id ${connection.threadId}`)
    afterConnection();
})

function afterConnection() {
    connection.query("SELECT * FROM new_table", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    })
}