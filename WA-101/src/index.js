import express from "express";
import routes from "./routes";
import cors from "cors";
const app = express();
app.use(cors());
const port = 8080;
// (req,res)
app.get("/", routes.home);
app.get("/prognoza", routes.prognoza);
app.get("/datum", routes.datum);
app.listen(port, () => console.log(`Port: ${port}!`));
