const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/leads", require("./routes/leadRoutes"));

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });
});
