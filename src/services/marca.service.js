import marcaRepository from '../repositories/marca.repository.js';

async function maisModelos() {
    const lista = await marcaRepository.lerArquivo();

    const data = lista.reduce((ac, x) => {
        if (x.models.length > ac?.models.length) return x;

        if (
            x.models.length === ac?.models.length &&
            x.brand.localeCompare(ac.brand) < 0
        ) {
            return x;
        }

        return ac;
    });

    return padronizarRetorno(data);
}

async function menosModelos() {
    const lista = await marcaRepository.lerArquivo();

    const data = lista.reduce((ac, x) => {
        if (x.models.length < ac?.models.length) return x;

        if (
            x.models.length === ac?.models.length &&
            x.brand.localeCompare(ac.brand) < 0
        ) {
            return x;
        }

        return ac;
    });

    return padronizarRetorno(data);
}

async function listaMaisModelos(qtd) {
    const lista = await marcaRepository.lerArquivo();

    const data = lista
        .sort((a, b) => a.brand.localeCompare(b.brand))
        .sort((a, b) => b.models.length - a.models.length)
        .slice(0, qtd);

    return padronizarListaRetorno(data);
}

async function listaMenosModelos(qtd) {
    const lista = await marcaRepository.lerArquivo();

    const data = lista
        .sort((a, b) => a.brand.localeCompare(b.brand))
        .sort((a, b) => a.models.length - b.models.length)
        .slice(0, qtd);

    return padronizarListaRetorno(data);
}

async function obterModelo(marca) {
    const lista = await marcaRepository.lerArquivo();

    const data = lista.find((x) =>
        x.brand.toUpperCase().includes(marca.toUpperCase()),
    );

    if (!data) throw new Error('Marca não encontrada.');

    return padronizarRetorno(data);
}

function padronizarRetorno(data) {
    return {
        marca: data.brand,
        qtdModelos: data.models.length,
        modelos: data.models,
    };
}

function padronizarListaRetorno(data) {
    return data.map((x) => {
        return padronizarRetorno(x);
    });
}

export default {
    maisModelos,
    menosModelos,
    listaMaisModelos,
    listaMenosModelos,
    obterModelo,
};
