var database = require("../database/config");
var mysql = require("mysql2");

function listar(idUsuario) {
    var instrucaoSql = `
        SELECT p.codigo, p.nome, c.nome AS continente, l.statuss AS status
        FROM lugar l
        JOIN pais p ON p.idPais = l.fkPais
        JOIN continente c ON c.idContinente = p.fkContinente
        WHERE l.fkUsuario = ${mysql.escape(idUsuario)};
    `;
    return database.executar(instrucaoSql);
}

function salvar(idUsuario, codigo, status) {
    var instrucaoSql = `
        INSERT INTO lugar (fkUsuario, fkPais, statuss)
        SELECT ${mysql.escape(idUsuario)}, idPais, ${mysql.escape(status)}
        FROM pais WHERE codigo = ${mysql.escape(codigo)}
        ON DUPLICATE KEY UPDATE statuss = VALUES(statuss);
    `;
    return database.executar(instrucaoSql);
}

function remover(idUsuario, codigo) {
    var instrucaoSql = `
        DELETE FROM lugar
        WHERE fkUsuario = ${mysql.escape(idUsuario)}
          AND fkPais = (SELECT idPais FROM pais WHERE codigo = ${mysql.escape(codigo)});
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    salvar,
    remover
};