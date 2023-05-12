# Dealership-api

## Dealership API possuí endpoints get que retornam algumas informações de uma lista de marcas e modelos

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
  "marca": "Fiat"
}
```

---

### Documentação swagger da API

(http://localhost:3004/docs)

---

### Como usar a API

Instale as Dependências
```bash
npm install
```

Iniciar a API
```bash
nodemon index.js
```

Pronto, agora podemos usar os endpoints

Também podemos usar a API com o graphQL<br>
http://localhost:3004/graphql

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
  {
    "brand": "Hummer",
    "models": [
      "H2",
      "H3"
    ],
  },
]
```
