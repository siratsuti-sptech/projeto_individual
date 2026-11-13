var database = require("../database/config");
var mysql = require("mysql2");

// mysql.escape coloca aspas e protege contra caracteres perigosos (SQL injection)
function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT idTabito AS id, nome, email
        FROM usuario
        WHERE email = ${mysql.escape(email)} AND senha = ${mysql.escape(senha)};
    `;
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha)
        VALUES (${mysql.escape(nome)}, ${mysql.escape(email)}, ${mysql.escape(senha)});
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};