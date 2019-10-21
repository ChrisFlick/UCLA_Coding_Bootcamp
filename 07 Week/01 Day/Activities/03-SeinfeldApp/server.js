const express = require("express")
const mysql = require("mysql")

const PORT = process.env.PORT || 8080;

const app = express();

const con = mysql.createConnection({
    host: "localhost",
    database: "seinfeld_db",
    PORT: 3306,
    user: "root",
    password: "9u4ke2Quake"
  });

 

app.get('/cast', function(req, res) {

    con.connect(function(err) {
        
        if (err) throw err;
        console.log("Connected!");
    
        con.query("SELECT * FROM actors", function (err, result) {
            if (err) throw err;
            console.log("Result: " + result);
            let html = '<h1>Results by ID:</h1>'

            html += display(result)
            

            res.send(html)
          });

          
      });
    
    
})

app.get('/coolnesss-chart', function(req, res) {
//     SELECT *
// FROM actors 
// WHERE attitude IN ('witty')


    

})

app.get('/attitude-chart/:att', function(req, res) {

    con.connect(function(err) {
        if (err) throw err;
        console.log('connected!')

        con.query(`
            SELECT *
            FROM actors
            WHERE attitude IN ('${req.params.att}')
        `,function (err, result) {
            if (err) throw err;

            let html = '<h1>Results by Attitude:</h1>'

            html += display(result)
            

            res.send(html)


        })
    }) 

})


app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost/${PORT}`)
})

function display(result) {
    let html = ""
    for (let i = 0; i < result.length; i++) {
        html += `
            <br>
            ID: ${result[i].id}<br>
            ${result[i].name}<br>
            Coolness: ${result[i].coolness}<br>
            Attitude: ${result[i].attitude}<br>
            <br>
        `
    }
    return html;
}