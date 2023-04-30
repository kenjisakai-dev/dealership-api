import { promises as fs } from 'fs';
const { readFile } = fs;

async function maisModelos() {
  const data = JSON.parse(await readFile('car-list.json'));
  let array = [];

  data
    .sort((a, b) => {
      return a.brand.localeCompare(b.brand);
    })
    .sort((a, b) => {
      return b.models.length - a.models.length;
    })
    .map((car) => {
      if (car.models.length == data[0].models.length) {
        array.push(car.brand);
      }
    });

  return array.length === 1 ? array[0] : array;
}

async function menosModelos() {
  const data = JSON.parse(await readFile('car-list.json'));

  let array = [];

  data
    .sort((a, b) => {
      return a.brand.localeCompare(b.brand);
    })
    .sort((a, b) => {
      return a.models.length - b.models.length;
    })
    .map((car) => {
      if (car.models.length == data[0].models.length) {
        array.push(car.brand);
      }
    });

  return array.length === 1 ? array[0] : array;
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
    .map((car) => {
      return `${car.brand} - ${car.models.length}`;
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
    .map((car) => {
      return `${car.brand} - ${car.models.length}`;
    });
  return brands;
}

async function listaModelos(marca) {
  const data = JSON.parse(await readFile('car-list.json'));

  const index = data.findIndex(
    (car) => car.brand.toLowerCase() === marca.toLowerCase()
  );

  return index === -1 ? [] : data[index].models;
}

export default {
  maisModelos,
  menosModelos,
  listaMaisModelos,
  listaMenosModelos,
  listaModelos,
};
