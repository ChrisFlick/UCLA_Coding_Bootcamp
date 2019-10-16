const http = require("http");
const PORT = 9000;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
 req.on('data', function(data) {
     console.log(data)
 })   
}

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})