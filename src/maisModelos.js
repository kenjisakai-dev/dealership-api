import carList from "../car-list.json" assert { type: "json" };

function numModelos() {
  let num = 0;
  carList.forEach((valor) => {
    if (valor.models.length > num) num = valor.models.length;
  });
  return num;
}

function maisModelos() {
  const num = numModelos();
  const array = [];

  carList.filter((valor) => {
    if (valor.models.length == num) array.push(valor.brand);
  });
  return array;
}

export { maisModelos };
