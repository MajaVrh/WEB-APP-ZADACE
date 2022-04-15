import { studenti } from "./store.js";

const getFirst = (req, res) => {
  let prvi = studenti[0];
  res.send(prvi);
};

const getLast = (req, res) => {
  let zadnji = studenti[studenti.length - 1];
  res.send(zadnji);
};

const getAll = (req, res) => {
  let svi = studenti;
  res.send(svi);
};

module.exports = { getFirst, getLast, getAll };
