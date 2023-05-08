# Dealership-api

## Dealership API possuí endpoints get que retornam algumas informações de uma lista de marcas e modelos

### Funcionalidades:

- Retornar a marca que possuí mais ou menos modelos<br>
<http://localhost:3004/marcas/maisModelos>
```bash
# GET
http://localhost:3004/marcas/maisModelos
```
```bash
# GET
http://localhost:3004/marcas/menosModelos
```

- Retornar as marcas que possuí mais ou menos modelos<br>
```bash
# GET
http://localhost:3004/marcas/listaMaisModelos/{qnt}
```
```bash
# GET
http://localhost:3004/marcas/listaMenosModelos/{qnt}
```

Retornar uma lista com todos os modelos de uma marca
```bash
# POST - passar o parâmetro no formato json { "marca": "Fiat" }
http://localhost:3004/marcas/listaModelos
```

---

### Documentação swagger da API
```bash
http://localhost:3004/docs
```

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
Usamos o arquivo car-list.json como banco<br>
- Um array de objetos com as seguintes propriedades brand (marca) e models (modelos)
- a propriedade models possuí um array dos modelos
