const http = require('http');
const servidor = http.createServer(function (req, resp) {
    resp.end(`
    <html>
        <head>
            <meta charset="utf-8"/>
        </head>
        <body>
            <h1>Página Web</h1>
        </body>
    </html>
    `);
});
servidor.listen(3000);