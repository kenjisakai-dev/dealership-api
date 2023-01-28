import carList from "../car-list.json" assert { type: "json" };

function adicionarQnt() {
  const newArray = [];

  carList.forEach((valor) => {
    newArray.push({
      qnt: valor.models.length,
      marca: valor.brand,
    });
  });
  return newArray;
}

function ordenarArray() {
  const array = adicionarQnt();

  array.sort(function (a, b) {
    if (a.qnt < b.qnt) {
      return -1;
    } else {
      return true;
    }
  });
  array.sort(function (a, b) {
    if (a.qnt == b.qnt && a.marca < b.marca) {
      return -1;
    } else {
      return true;
    }
  });
  return array;
}

function listaMenosModelos(req) {
  const array = ordenarArray().slice(0, req);
  const newArray = [];

  array.forEach((valor) => {
    newArray.push(`${valor.marca} - ${valor.qnt}`);
  });
  return newArray;
}

export { listaMenosModelos };
