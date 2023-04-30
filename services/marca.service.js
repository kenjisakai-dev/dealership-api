import MarcaRepository from '../repositories/marca.repository.js';

async function maisModelos() {
  return await MarcaRepository.maisModelos();
}
async function menosModelos() {
  return await MarcaRepository.menosModelos();
}
async function listaMaisModelos(qnt) {
  return await MarcaRepository.listaMaisModelos(qnt);
}
async function listaMenosModelos(qnt) {
  return await MarcaRepository.listaMenosModelos(qnt);
}
async function listaModelos(marca) {
  return await MarcaRepository.listaModelos(marca);
}

export default {
  maisModelos,
  menosModelos,
  listaMaisModelos,
  listaMenosModelos,
  listaModelos,
};
