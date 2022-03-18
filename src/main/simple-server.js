const http = require('http');
const fs = require('fs');
const servidor = http.createServer(function (req, resp) {
    let html = ''
    if (req.url  == '/') {
        html = fs.readFileSync('src/main/templates/index.html');
    } else if (req.url == '/livros') {
        html = fs.readFileSync('src/main/templates/livros.html');
    }
    resp.end(html);
});
servidor.listen(3000);