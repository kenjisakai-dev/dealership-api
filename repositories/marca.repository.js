import { promises as fs } from 'fs';
const { readFile } = fs;

async function maisModelos() {
  const data = JSON.parse(await readFile('car-list.json'));

  data
    .sort((a, b) => {
      return a.brand.localeCompare(b.brand);
    })
    .sort((a, b) => {
      return b.models.length - a.models.length;
    });

  const brands = [];
  const moreModels = data[0].models.length;

  data.forEach((e) => {
    if (e.models.length === moreModels) brands.push(e.brand);
  });

  return brands.length === 1 ? brands[0] : brands;
}

async function menosModelos() {
  const data = JSON.parse(await readFile('car-list.json'));

  data
    .sort((a, b) => {
      return a.brand.localeCompare(b.brand);
    })
    .sort((a, b) => {
      return a.models.length - b.models.length;
    });

  const brands = [];
  const moreModels = data[0].models.length;

  data.forEach((e) => {
    if (e.models.length === moreModels) brands.push(e.brand);
  });

  return brands.length === 1 ? brands[0] : brands;
}

async function listaMaisModelos(qnt) {
  const data = JSON.parse(await readFile('car-list.json'));

  const brands = data
    .sort((a, b) => {
      return a.brand.localeCompare(b.brand);
    })
    .sort((a, b) => {
      return b.models.length - a.models.length;
    })
    .slice(0, qnt)
    .map((e) => {
      return `${e.brand} - ${e.models.length}`;
    });
  return brands;
}

async function listaMenosModelos(qnt) {
  const data = JSON.parse(await readFile('car-list.json'));

  const brands = data
    .sort((a, b) => {
      return a.brand.localeCompare(b.brand);
    })
    .sort((a, b) => {
      return a.models.length - b.models.length;
    })
    .slice(0, qnt)
    .map((e) => {
      return `${e.brand} - ${e.models.length}`;
    });
  return brands;
}

async function listaModelos(marca) {
  const data = JSON.parse(await readFile('car-list.json'));

  if (typeof marca !== 'string') marca = marca.nomeMarca;

  const index = data.findIndex((e) => {
    return e.brand?.toLowerCase() === marca.toLowerCase();
  });

  return index === -1 ? [] : data[index].models;
}

export default {
  maisModelos,
  menosModelos,
  listaMaisModelos,
  listaMenosModelos,
  listaModelos,
};
