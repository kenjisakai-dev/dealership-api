import { promises as fs } from 'fs';

async function lerArquivo() {
    try {
        const lista = JSON.parse(await fs.readFile('car-list.json'));

        if (lista.length === 0) {
            throw new Error('Não existe marcas e modelos cadastrados.');
        }

        return lista;
    } catch (erro) {
        throw new Error(`Erro ao ler arquivo: ${erro.message}`);
    }
}

export default {
    lerArquivo,
};
