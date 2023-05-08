# Dealership-api

## Dealership API possuí endpoints get que retornam algumas informações de uma lista de marcas e modelos

### Funcionalidades:

- Retornar a marca que possuí mais ou menos modelos<br>
- GET http://localhost:3004/marcas/maisModelos<br>
- GET http://localhost:3004/marcas/menosModelos<br>

- Retornar as marcas que possuí mais ou menos modelos<br>
- GET http://localhost:3004/marcas/listaMaisModelos/{qnt}<br>
- GET http://localhost:3004/marcas/listaMenosModelos/{qnt}<br>

- Retornar uma lista com todos os modelos de uma marca<br>
- POST http://localhost:3004/marcas/listaModelos<br>

### Como usar a API

Instale as Dependências
```bash
npm install
```

Iniciar a API
```bash
nodemon index.js
```

### FrameWorks Usados
- express
- nodemon
- winston
- swagger-ui-express

### Funcionamento do Bando de Dados
Usamos o arquivo car-list.json como banco
O Arquivo possuí
- Um array de objetos com as seguintes propriedades brand (marca) e models (modelos)
- a propriedade models possuí um array dos modelos
