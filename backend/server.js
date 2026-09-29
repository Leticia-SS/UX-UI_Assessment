const express = require("express");
const cors = require("cors");
const wearableRoutes = require("./routes/wearable");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", wearableRoutes);

app.listen(PORT, () => {
  console.log(`Servidor Vitalis Care rodando em http://localhost:${PORT}`);
});