let arrBrojeva = [];
const nasumicno = (req, res) => {
  let broj = Math.floor(Math.random() * 100);
  arrBrojeva.push(broj);
  res.send(`Dodan je broj ${broj}`);
};

const vratiListu = (req, res) => {
  if (arrBrojeva.length < 1) {
    return res.send("PRAZNA LISTA");
  }
  const vrati = arrBrojeva.join(" ");
  return res.send(vrati);
};

module.exports = { nasumicno, vratiListu };
