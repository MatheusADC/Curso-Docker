const express = require('express');
var mysql = require('mysql2');

const app = express();
const port = PORTA_AQUI;

var connection = mysql.createConnection({
    host: NOME_CONTAINER_AQUI,
    user: USER_AQUI,
    password: SENHA_AQUI,
    database: NOME_BANCO_AQUI,
    port: PORTA_MYSQL_AQUI
});

connection.connect();

app.get('/', (req, res) => {
    connection.query('SELECT * FROM produtos', function (error, results, fields) {
        if (error) throw error;
        res.send(`${results[0].name}} = ${results[1].name}`);

        connection.end();
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});