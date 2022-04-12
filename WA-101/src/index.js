import express from "express";
import routes from "./routes";
const app = express();
const port = 3000;
// (req,res)
app.get("/", routes.home);
app.get("/prognoza", routes.prognoza);
app.get("/datum", routes.datum);
app.listen(port, () => console.log(`Port: ${port}!`));
