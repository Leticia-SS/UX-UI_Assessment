const express = require("express");
const router = express.Router();

let wearable = {
  vinculado: false,
  ultimaSincronizacao: null
};

router.get("/wearable-status", (req, res) => {
  res.json(wearable);
});

router.post("/wearable/vincular", (req, res) => {
  wearable.vinculado = true;
  wearable.ultimaSincronizacao = new Date().toISOString();
  res.json({
    mensagem: "Wearable vinculado com sucesso",
    wearable
  });
});

module.exports = router;