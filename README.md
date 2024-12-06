# Dealership-api

O Dealership API tem como objetivo simular um sistema de gerenciamento de uma concessionária de veículos, onde a principal funcionalidade é fornecer informações sobre marcas e seus modelos de carros.

Esse é um um projeto desenvolvido com o objetivo de praticar conceitos fundamentais de desenvolvimento de APIs. Este projeto foi criado como parte dos exercícios solicitados pelo curso da XP Educação, proporcionando uma abordagem prática para consolidar os aprendizados em desenvolvimento backend.

## Base de Dados

Este projeto utiliza um arquivo .json como banco de dados. Essa abordagem é comumente chamada de JSON-based database ou file-based database, sendo útil para projetos simples ou protótipos.

O banco de dados é representado como um array de objetos JSON. Cada objeto contém informações sobre uma marca de carro e os modelos associados. Veja abaixo um exemplo do formato utilizado:

```json
[
    {
        "brand": "Porsche",
        "models": ["911 Carrera", "Cayenne", "Cayman"]
    },
    {
        "brand": "Honda",
        "models": ["City", "Civic", "Civic Type R"]
    }
]
```

## 🚀 Tecnologias Utilizadas

-   **`express`**  
    É um framework para Node.js utilizado para facilitar a criação da API

-   **`winston`**  
    Utilizado para gerenciar e personalizar o log da API

-   **`nodemon`**  
    Utilizado para ajudar no desenvolvimento da API pois reinicia automaticamente a aplicação sempre que detecta uma alteração no código-fonte

-   **`express-graphql`**  
    A biblioteca e um middleware que permite a integração do GraphQL com o Express permitindo a criação a API com GraphQL

-   **`graphql`**
    Utilizado para criar API com o GraphQL que oferece uma maneira eficiente, flexível e poderosa de consumir APIs

-   **`swagger-ui-express`**
    Utilizado para integrar uma interface gráfica do Swagger com os endpoints documentados assim facilitando os testes na API

## 🛠️ Como executar o projeto

1. Instale as dependências do projeto

    ```sh
    npm install
    ```

2. Inicie o projeto Localmente

    ```sh
    npm run start
    ```

3. Podemos consultar os endpoints de 3 formas diferentes

    1. Consultar via requisições HTTP padrão `http://localhost:3003/<endpoint>`

    2. Consultar via GraphQL acessando `http://localhost:3003/graphQL`

    3. Consultar via documentação swagger acessando `http://localhost:3003/swagger`

## 🔛 Como consultar os endpoints

### Marcas (Requisição HTTP padrão)

<details>
  <summary>GET /marcas/maisModelos - Endpoint responsável por obter a marca de carro com mais modelos</summary>

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                       |
| ---------- | ----------- | ----------------------------------- |
| 200        | Ok          | Informação obtida com sucesso       |
| 400        | Bad Request | Houve um erro ao obter a informação |

#### **Resposta 200 do endoint**

```json
{
    "marca": "Mercedes-Benz",
    "qtdModelos": 58,
    "modelos": [
        "100 D",
        "115",
        "124",
        "126",
        "190",
        "190 D",
        "190 E",
        "200 - 300",
        "200 D",
        "200 E",
        "210 Van",
        "210 kombi",
        "310 Van",
        "310 kombi",
        "230 - 300 CE Coupé",
        "260 - 560 SE",
        "260 - 560 SEL",
        "500 - 600 SEC Coupé",
        "Trieda A",
        "A",
        "A L",
        "AMG GT",
        "Trieda B",
        "Trieda C",
        "C",
        "C Sportcoupé",
        "C T",
        "Citan",
        "CL",
        "CL",
        "CLA",
        "CLC",
        "CLK Cabrio",
        "CLK Coupé",
        "CLS",
        "Trieda E",
        "E",
        "E Cabrio",
        "E Coupé",
        "E T",
        "Trieda G",
        "G Cabrio",
        "GL",
        "GLA",
        "GLC",
        "GLE",
        "GLK",
        "Trieda M",
        "MB 100",
        "Trieda R",
        "Trieda S",
        "S",
        "S Coupé",
        "SL",
        "SLC",
        "SLK",
        "SLR",
        "Sprinter"
    ]
}
```

</details>

<details>
  <summary>GET /marcas/menosModelos - Endpoint responsável por obter a marca de carro com menos modelos</summary>

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                       |
| ---------- | ----------- | ----------------------------------- |
| 200        | Ok          | Informação obtida com sucesso       |
| 400        | Bad Request | Houve um erro ao obter a informação |

#### **Resposta 200 do endoint**

```json
{
    "marca": "Hummer",
    "qtdModelos": 2,
    "modelos": ["H2", "H3"]
}
```

</details>

<details>
  <summary>GET /marcas/listaMaisModelos/:qtd - Endpoint responsável por obter uma lista de marcas de carro com mais modelos</summary>

#### **Parâmetros da Requisição**

| **Tipo**          | **Parâmetro** | **Descrição**                   | **Obrigatório** |
| ----------------- | ------------- | ------------------------------- | --------------- |
| parâmetro de rota | `qtd`         | Quantidade de marcas retornadas | Sim             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                       |
| ---------- | ----------- | ----------------------------------- |
| 200        | Ok          | Informação obtida com sucesso       |
| 400        | Bad Request | Houve um erro ao obter a informação |

#### **Resposta 200 do endoint**

```json
[
    {
        "marca": "Mercedes-Benz",
        "qtdModelos": 58,
        "modelos": [
            "100 D",
            "115",
            "124",
            "126",
            "190",
            "190 D",
            "190 E",
            "200 - 300",
            "200 D",
            "200 E",
            "210 Van",
            "210 kombi",
            "310 Van",
            "310 kombi",
            "230 - 300 CE Coupé",
            "260 - 560 SE",
            "260 - 560 SEL",
            "500 - 600 SEC Coupé",
            "Trieda A",
            "A",
            "A L",
            "AMG GT",
            "Trieda B",
            "Trieda C",
            "C",
            "C Sportcoupé",
            "C T",
            "Citan",
            "CL",
            "CL",
            "CLA",
            "CLC",
            "CLK Cabrio",
            "CLK Coupé",
            "CLS",
            "Trieda E",
            "E",
            "E Cabrio",
            "E Coupé",
            "E T",
            "Trieda G",
            "G Cabrio",
            "GL",
            "GLA",
            "GLC",
            "GLE",
            "GLK",
            "Trieda M",
            "MB 100",
            "Trieda R",
            "Trieda S",
            "S",
            "S Coupé",
            "SL",
            "SLC",
            "SLK",
            "SLR",
            "Sprinter"
        ]
    },
    {
        "marca": "Fiat",
        "qtdModelos": 48,
        "modelos": [
            "1100",
            "126",
            "500",
            "500L",
            "500X",
            "850",
            "Barchetta",
            "Brava",
            "Cinquecento",
            "Coupé",
            "Croma",
            "Doblo",
            "Doblo Cargo",
            "Doblo Cargo Combi",
            "Ducato",
            "Ducato Van",
            "Ducato Kombi",
            "Ducato Podvozok",
            "Florino",
            "Florino Combi",
            "Freemont",
            "Grande Punto",
            "Idea",
            "Linea",
            "Marea",
            "Marea Weekend",
            "Multipla",
            "Palio Weekend",
            "Panda",
            "Panda Van",
            "Punto",
            "Punto Cabriolet",
            "Punto Evo",
            "Punto Van",
            "Qubo",
            "Scudo",
            "Scudo Van",
            "Scudo Kombi",
            "Sedici",
            "Seicento",
            "Stilo",
            "Stilo Multiwagon",
            "Strada",
            "Talento",
            "Tipo",
            "Ulysse",
            "Uno",
            "X1/9"
        ]
    }
]
```

</details>

<details>
  <summary>GET /marcas/listaMaisModelos/:qtd - Endpoint responsável por obter uma lista de marcas de carro com menos modelos</summary>

#### **Parâmetros da Requisição**

| **Tipo**          | **Parâmetro** | **Descrição**                   | **Obrigatório** |
| ----------------- | ------------- | ------------------------------- | --------------- |
| parâmetro de rota | `qtd`         | Quantidade de marcas retornadas | Sim             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                       |
| ---------- | ----------- | ----------------------------------- |
| 200        | Ok          | Informação obtida com sucesso       |
| 400        | Bad Request | Houve um erro ao obter a informação |

#### **Resposta 200 do endoint**

```json
[
    {
        "marca": "Hummer",
        "qtdModelos": 2,
        "modelos": ["H2", "H3"]
    },
    {
        "marca": "Infiniti",
        "qtdModelos": 7,
        "modelos": ["EX", "FX", "G", "G Coupé", "M", "Q", "QX"]
    }
]
```

</details>

<details>
  <summary>GET /marcas/obterModelo/:marca - Endpoint responsável por obter uma marca de carro específica</summary>

#### **Parâmetros da Requisição**

| **Tipo**          | **Parâmetro** | **Descrição**                               | **Obrigatório** |
| ----------------- | ------------- | ------------------------------------------- | --------------- |
| parâmetro de rota | `marca`       | Marca de carro que será procurada retornada | Sim             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                       |
| ---------- | ----------- | ----------------------------------- |
| 200        | Ok          | Informação obtida com sucesso       |
| 400        | Bad Request | Houve um erro ao obter a informação |

#### **Resposta 200 do endoint**

```json
{
    "marca": "Hummer",
    "qtdModelos": 2,
    "modelos": ["H2", "H3"]
}
```

</details>

### Marcas (Consulta GraphQL)

<details>
  <summary>maisModelos - Consulta responsável por obter a marca de carro com mais modelos</summary>

#### **Consulta**

```
{
  maisModelos {
    marca
    qtdModelos
    modelos
  }
}
```

#### **Resposta**

```
{
  "data": {
    "maisModelos": {
      "marca": "Mercedes-Benz",
      "qtdModelos": 58,
      "modelos": [
        "100 D",
        "115",
        "124",
        "126",
        "190",
        "190 D",
        "190 E",
        "200 - 300",
        "200 D",
        "200 E",
        "210 Van",
        "210 kombi",
        "310 Van",
        "310 kombi",
        "230 - 300 CE Coupé",
        "260 - 560 SE",
        "260 - 560 SEL",
        "500 - 600 SEC Coupé",
        "Trieda A",
        "A",
        "A L",
        "AMG GT",
        "Trieda B",
        "Trieda C",
        "C",
        "C Sportcoupé",
        "C T",
        "Citan",
        "CL",
        "CL",
        "CLA",
        "CLC",
        "CLK Cabrio",
        "CLK Coupé",
        "CLS",
        "Trieda E",
        "E",
        "E Cabrio",
        "E Coupé",
        "E T",
        "Trieda G",
        "G Cabrio",
        "GL",
        "GLA",
        "GLC",
        "GLE",
        "GLK",
        "Trieda M",
        "MB 100",
        "Trieda R",
        "Trieda S",
        "S",
        "S Coupé",
        "SL",
        "SLC",
        "SLK",
        "SLR",
        "Sprinter"
      ]
    }
  }
}
```

</details>

<details>
  <summary>menosModelos - Consulta responsável por obter a marca de carro com menos modelos</summary>

#### **Consulta**

```
{
  menosModelos {
    marca
    qtdModelos
    modelos
  }
}
```

#### **Resposta**

```
{
  "data": {
    "menosModelos": {
      "marca": "Hummer",
      "qtdModelos": 2,
      "modelos": [
        "H2",
        "H3"
      ]
    }
  }
}
```

</details>

<details>
  <summary>listaMaisModelos - Consulta responsável por obter uma lista de marcas de carro com mais modelos</summary>

#### **Consulta**

```
{
  listaMaisModelos(qtd: 2) {
    marca
    qtdModelos
    modelos
  }
}
```

#### **Resposta**

```
{
  "data": {
    "listaMaisModelos": [
      {
        "marca": "Mercedes-Benz",
        "qtdModelos": 58,
        "modelos": [
          "100 D",
          "115",
          "124",
          "126",
          "190",
          "190 D",
          "190 E",
          "200 - 300",
          "200 D",
          "200 E",
          "210 Van",
          "210 kombi",
          "310 Van",
          "310 kombi",
          "230 - 300 CE Coupé",
          "260 - 560 SE",
          "260 - 560 SEL",
          "500 - 600 SEC Coupé",
          "Trieda A",
          "A",
          "A L",
          "AMG GT",
          "Trieda B",
          "Trieda C",
          "C",
          "C Sportcoupé",
          "C T",
          "Citan",
          "CL",
          "CL",
          "CLA",
          "CLC",
          "CLK Cabrio",
          "CLK Coupé",
          "CLS",
          "Trieda E",
          "E",
          "E Cabrio",
          "E Coupé",
          "E T",
          "Trieda G",
          "G Cabrio",
          "GL",
          "GLA",
          "GLC",
          "GLE",
          "GLK",
          "Trieda M",
          "MB 100",
          "Trieda R",
          "Trieda S",
          "S",
          "S Coupé",
          "SL",
          "SLC",
          "SLK",
          "SLR",
          "Sprinter"
        ]
      },
      {
        "marca": "Fiat",
        "qtdModelos": 48,
        "modelos": [
          "1100",
          "126",
          "500",
          "500L",
          "500X",
          "850",
          "Barchetta",
          "Brava",
          "Cinquecento",
          "Coupé",
          "Croma",
          "Doblo",
          "Doblo Cargo",
          "Doblo Cargo Combi",
          "Ducato",
          "Ducato Van",
          "Ducato Kombi",
          "Ducato Podvozok",
          "Florino",
          "Florino Combi",
          "Freemont",
          "Grande Punto",
          "Idea",
          "Linea",
          "Marea",
          "Marea Weekend",
          "Multipla",
          "Palio Weekend",
          "Panda",
          "Panda Van",
          "Punto",
          "Punto Cabriolet",
          "Punto Evo",
          "Punto Van",
          "Qubo",
          "Scudo",
          "Scudo Van",
          "Scudo Kombi",
          "Sedici",
          "Seicento",
          "Stilo",
          "Stilo Multiwagon",
          "Strada",
          "Talento",
          "Tipo",
          "Ulysse",
          "Uno",
          "X1/9"
        ]
      }
    ]
  }
}
```

</details>

<details>
  <summary>listaMenosModelos - Consulta responsável por obter uma lista de marcas de carro com menos modelos</summary>

#### **Consulta**

```
{
  listaMenosModelos(qtd: 2) {
    marca
    qtdModelos
    modelos
  }
}
```

#### **Resposta**

```
{
  "data": {
    "listaMenosModelos": [
      {
        "marca": "Hummer",
        "qtdModelos": 2,
        "modelos": [
          "H2",
          "H3"
        ]
      },
      {
        "marca": "Infiniti",
        "qtdModelos": 7,
        "modelos": [
          "EX",
          "FX",
          "G",
          "G Coupé",
          "M",
          "Q",
          "QX"
        ]
      }
    ]
  }
}
```

</details>

<details>
  <summary>obterModelo - Consulta responsável por obter uma marca de carro específica</summary>

#### **Consulta**

```
{
  obterModelo(marca: "Hummer") {
    marca
    qtdModelos
    modelos
  }
}
```

#### **Resposta**

```
{
  "data": {
    "obterModelo": {
      "marca": "Hummer",
      "qtdModelos": 2,
      "modelos": [
        "H2",
        "H3"
      ]
    }
  }
}
```

</details>
