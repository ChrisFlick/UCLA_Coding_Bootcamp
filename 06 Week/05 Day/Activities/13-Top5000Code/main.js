const mysql = require('mysql');
const inquirer = require('inquirer');

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: "",
    database: 'top_songsDB'
});

connection.connect(function (err) {
    if (err) throw err;

    console.log(`Connected as id ${connection.threadId}`)

    query();
})

function query() {
    inquirer
        .prompt({
            name: 'choice',
            type: 'list',
            message: "What do you want to do?",
            choices: [
                "Find songs by artist",
                "Find artist that repeat",
                "find song within a range",
                "Search for a song",
                "Escape"
            ]
        }).then(function (res) {
            switch (res.choice) {
                case "Find songs by artist":
                    findByArtist();
                    break;

                case "Find artist that repeat":
                    multiSearch();
                    break;

                case "find song within a range":
                    rangeSearch();
                    break;

                case "Search for a song":
                    songSearch();
                    break;

                case "Escape":
                    connection.end();
                    break
            }
        })
};

function findByArtist() {
    inquirer
        .prompt({
            name: 'artist',
            message: "Which artist would you like to search for?",
            type: "input",
        }).then(function (res) {
            connection.query(`SELECT * FROM top5000 WHERE artist IN ('${res.artist}')`,
                function (err, res) {
                    if (err) throw err;
                    console.log(res);
                    query();
                });
        });
}

function multiSearch() {
    connection.query(`SELECT artist FROM top5000 GROUP BY artist HAVING COUNT(artist) > 1`,
        function (err, res) {
            if (err) throw err;
            console.log(res);
            query();
        });
}

function rangeSearch() {
    inquirer
        .prompt([
            {
                name: "start",
                type: "input",
                message: "Enter starting position: ",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "end",
                type: "input",
                message: "Enter ending position: ",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ]).then(function (res) {
            connection.query(`SELECT * FROM top5000 WHERE rank_n BETWEEN ${res.start} AND ${res.end}`,
                function (err, res) {
                    if (err) throw err;
                    console.log(res);
                    query();
                });
        });
}

function songSearch() {
    inquirer
      .prompt({
        name: "song",
        type: "input",
        message: "What song would you like to look for?"
      })
      .then(function(res) {
        connection.query(`SELECT * FROM top5000 WHERE title IN ('${res.song}')`,
            function (err, res) {
                if (err) throw err;
                console.log(res);
                query();
            });
      });
  }