var express = require("express");
var router = express.Router();

var lugarController = require("../controllers/lugarController");

// GET /lugares/1 -> lista os lugares do usuário 1
router.get("/:idUsuario", function (req, res) {
    lugarController.listar(req, res);
});

// POST /lugares/salvar -> grava ou atualiza um lugar
router.post("/salvar", function (req, res) {
    lugarController.salvar(req, res);
});

// DELETE /lugares/1/BRA -> remove o Brasil do usuário 1
router.delete("/:idUsuario/:codigo", function (req, res) {
    lugarController.remover(req, res);
});

module.exports = router;