var lugarModel = require("../models/lugarModel");

function listar(req, res) {
    lugarModel.listar(req.params.idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).send("Erro ao buscar os lugares.");
        });
}

function salvar(req, res) {
    var idUsuario = req.body.idUsuario;
    var codigo = req.body.codigo;
    var status = req.body.status;

    if (!idUsuario || !codigo) {
        return res.status(400).send("Dados incompletos.");
    }
    if (status != "visitado" && status != "desejo") {
        return res.status(400).send("Status inválido.");
    }

    lugarModel.salvar(idUsuario, codigo, status)
        .then(function () {
            res.status(200).send("ok");
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).send("Erro ao salvar o lugar.");
        });
}

function remover(req, res) {
    lugarModel.remover(req.params.idUsuario, req.params.codigo)
        .then(function () {
            res.status(200).send("ok");
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).send("Erro ao remover o lugar.");
        });
}

module.exports = {
    listar,
    salvar,
    remover
};