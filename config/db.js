const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'sql10.freemysqlhosting.net', // Database host
    user: 'sql10742220', // Database Username
    password: 'JSmNyPqHlc', // Database Password
    database: 'sql10742220' // Database Name
});

conexao.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

module.exports = conexao;
