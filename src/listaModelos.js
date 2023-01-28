import carList from "../car-list.json" assert { type: "json" };

function listaModelos(req) {
  const { nomeMarca } = req;
  let newArray;
  carList.forEach((valor) => {
    if (nomeMarca.toLowerCase() == valor.brand.toLowerCase()) {
      newArray = valor.models;
    }
  });
  return newArray == undefined ? (newArray = []) : newArray;
}

export { listaModelos };
