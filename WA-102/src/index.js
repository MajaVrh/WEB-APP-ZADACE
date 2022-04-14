import express from "express";
const { nasumicno, vratiListu } = require("./dohvati_dodaj");
const app = express();
const port = 3000;

app.get("/dodaj", nasumicno);
app.get("/dohvati", vratiListu);
app.listen(port, () => console.log(`Port: ${port}!`));
