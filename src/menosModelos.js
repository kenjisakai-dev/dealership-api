import carList from "../car-list.json" assert { type: "json" };

function numModelos() {
  let num = carList[0].models.length;
  carList.forEach((valor) => {
    if (valor.models.length < num) num = valor.models.length;
  });
  return num;
}

function menosModelos() {
  const num = numModelos();
  const array = [];

  carList.filter((valor) => {
    if (valor.models.length == num) array.push(valor.brand);
  });
  return array;
}

export { menosModelos };
