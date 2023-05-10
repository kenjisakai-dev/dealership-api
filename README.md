# Dealership-api

## Dealership API possuí endpoints get que retornam algumas informações de uma lista de marcas e modelos

### Funcionalidades

Retornar a marca que possuí mais ou menos modelos<br>
GET (http://localhost:3004/marcas/maisModelos)<br>
GET (http://localhost:3004/marcas/menosModelos)

Retornar as marcas que possuí mais ou menos modelos<br>
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

---

### FrameWorks Usados
- express
- nodemon
- winston
- swagger-ui-express

---

### Funcionamento do Bando de Dados
Formato do arquivo car-list.json
```json
[
  {
    brand: "Fiat",
    models: [
      "1100", "126", "500", "500L", "500X", "850", "Barchetta", "Brava", "Cinquecento", "Coupé", "Croma", "Doblo", "Doblo Cargo", "Doblo Cargo Combi", "Ducato",         "Ducato Van", "Ducato Kombi", "Ducato Podvozok", "Florino", "Florino Combi", "Freemont", "Grande Punto", "Idea", "Linea", "Marea", "Marea Weekend",  "Multipla", "Palio Weekend", "Panda", "Panda Van", "Punto", "Punto Cabriolet", "Punto Evo", "Punto Van", "Qubo", "Scudo", "Scudo Van", "Scudo Kombi", "Sedici",   "Seicento", "Stilo", "Stilo Multiwagon", "Strada", "Talento", "Tipo", "Ulysse", "Uno", "X1/9"
    ]
  }
]
```
