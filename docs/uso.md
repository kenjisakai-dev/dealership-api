### Como usar a API Dealership

Instale as dependências:

- express
- nodemon
- winston

```bash
npm install
```

Inicie a API:

```bash
nodemon index.js
```

Pronto agora podemos usar os endpoints:

- GET http://localhost:3000/marcas/maisModelos - marca com mais modelos<br>
- GET http://localhost:3000/marcas/menosModelos - marca com menos modelos<br>
- GET req.params.qnt: http://localhost:3000/marcas/listaMaisModelos/{qnt} - lista com mais modelos<br>
- GET req.params.qnt: http://localhost:3000/marcas/listaMenosModelos/{qnt} - lista com menos modelos<br>
- POST req.body.marca: http://localhost:3000/marcas/listaModelos - lista dos modelos<br>
