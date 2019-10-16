const http = require("http")
const fs = require('fs');

const PORT = 8000;

const server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});

function handleRequest(req, res) {
    switch(req.url) {
        case "/":
            fs.readFile(__dirname + "/home.html", function (err, data) {
                if (err) throw err;

                res.writeHead(200, {"content-type": "text/html"});
                res.end(data)
            })
            break;
        case "/food":
            fs.readFile(__dirname + "/food.html", function (err, data) {
                if (err) throw err;

                res.writeHead(200, {"content-type": "text/html"});
                res.end(data)
            })
            break;
        case "/movie":
            fs.readFile(__dirname + "/movie.html", function (err, data) {
                if (err) throw err;

                res.writeHead(200, {"content-type": "text/html"});
                res.end(data)
            })
            break;
        case "/css":
            fs.readFile(__dirname + "/css.html", function (err, data) {
                if (err) throw err;

                res.writeHead(200, {"content-type": "text/html"});
                res.end(data)
            })
            break;
    }
}