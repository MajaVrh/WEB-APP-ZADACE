import moment from "moment";

//vraća trenutno datum/vrijeme formatirano u obliku dd.mm.yyyy HH:MM .
function datum(req, res) {
  let trenutniDatum = moment().format("DD.MM.YYYY HH:MM");
  res.send(trenutniDatum);
}
//- vraća nasumičnu rečenicu u obliku "Danas će biti [sunčano/kišovito/oblačno]
function prognoza(req, res) {
  let mogucnosti = ["oblačno", "kišovito", "sunčano"];
  let broj = Math.floor(Math.random() * mogucnosti.length);
  res.send("Danas će biti: " + mogucnosti[broj]);
}

//- vraća kratak opis na kojim se adresama nalaze prve dvije rute
function home(req, res) {
  res.send(
    "Adresa http://localhost:3000/prognoza nasumično bira između 3 moguće prognoze </br> </br> Adresa http://localhost:3000/datum prikazuje trenutačno vrijeme"
  );
}

export default { datum, prognoza, home };
