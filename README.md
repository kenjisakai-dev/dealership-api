# Dealership-api

## Dealership API possuí endpoints que retornam algumas informações de uma lista de marcas e modelos de carros

### Funcionalidades

Retornar a marca que possuí mais ou menos modelos<br>
GET (http://localhost:3004/marcas/maisModelos)<br>
GET (http://localhost:3004/marcas/menosModelos)

Retornar as marcas que possuem mais ou menos modelos<br>
GET (http://localhost:3004/marcas/listaMaisModelos/{qnt})<br>
GET (http://localhost:3004/marcas/listaMenosModelos/{qnt})


Retornar uma lista com todos os modelos de uma marca<br>
POST (http://localhost:3004/marcas/listaModelos)
```json
{
  "nomeMarca": "Fiat"
}
```

### Também podemos usar o GraphQL (http://localhost:3004/graphql)

Retornar a marca que possuí mais ou menos modelos<br>
```bash
{
  maisModelos
  menosModelos
}
```

Retornar a marca que possuí mais ou menos modelos<br>
```bash
{
  listaMaisModelos(qnt: 5)
  listaMenosModelos(qnt: 5)
}
```

Retornar as marcas que possuem mais ou menos modelos<br>
```bash
mutation {
  listaModelos(marca: {
    nomeMarca: "fiat"
  })
}
```

---

### Como usar a API

Instale as Dependências
```bash
npm install
```

Iniciar a API
```bash
npm run dev
```

Pronto, agora podemos usar a API

---

### Documentação swagger da API

(http://localhost:3004/swagger)

---

### FrameWorks Usados
- express
- nodemon
- winston
- swagger-ui-express
- graphQL
- express-graphQL

---

### Funcionamento do Bando de Dados
Formato do arquivo car-list.json
```json
[
  {"brand": "Hummer", "models": ["H2", "H3"]},
  {"brand": "Rover", "models": ["200", "214", "218", "25", "400", "414", "416", "620", "75"]},
]
```
