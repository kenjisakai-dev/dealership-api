# Dealership-api

## Dealership API 

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

FrameWorks Usados
- express
- nodemon
- winston
- swagger-ui-express

Instale as Dependências
```bash
npm install
```

Iniciar a API
```bash
nodemon index.js
```

### Modelo do Banco
Usamos o arquivo car-list.json como banco
O Arquivo possuí
- Um array de objetos com as seguintes propriedades brand (marca) e models (modelos)
- a propriedade models possuí um array dos modelos
