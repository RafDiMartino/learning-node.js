const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page")
    }
    if (req.url === "/about") {
        res.end("Welcome to our about page")
    }
    res.end(`
        <h1>OOOPS!</h1>
        <p>No page baby</p>
        <a href="/">Go back Home</a>
    `)
    // res.write();
    // res.end();
});

// set the port wher the server is listening to
server.listen(3000);