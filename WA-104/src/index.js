import express from "express";
const { getFirst, getLast, getAll } = require("./dohvati");
const app = express();
const port = 3000;

app.get("/studenti", getAll);
app.get("/studenti/first", getFirst);
app.get("/studenti/last", getLast);
app.listen(3000, () => console.log(`SLUŠA ${port}`));
