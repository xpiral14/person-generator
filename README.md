![logo](./public/images/logo.svg)

> # Simule pessoas em seus projetos de uma maneira fácil.

## Com o person generator é possível gerar:

- [x] Nomes: `randomName()` Sendo que podem ser masculinos e femininos
- [x] Nomes Inteiros: `randomFullName`
- [x] Telefones: `randomTel()` 
- [x] Cidades: `randomCity()` Qualquer cidade do Brasil
- [x] Cidades com Estado `randomCityState()`
- [x] Estados: `randomState()`

# Modo de uso
```javascript
const personGenerator = require('./Generates');

const {randomFullName,randomCity, randomCityEstate, randomPerson, randomName, randomState} = personGenerator;

//Agora já é possível utilizar os métodos
```

# Métodos
- ## `randomName(howMany = 1, gender = 'any')`:
    ## Parametros: 
    - ### HowMany: aceita somente valores inteiros. É o total de nomes que você deseja retornar
    ## Retorno: 
    Caso o valor de `howMany` seja 1, o retorno será um Objeto contendo o nome gerado e o genero do nome. Caso seja maior que 1, o retorno é um array com os objetos contendo nome e gênero.

    ## Exemplo: 
    ```js
    const personGenerator = require('./Generates');
    const {randomName} = personGenerator

    randomName(3, 'f') // [ { nome: 'Joana', sexo: 'f' }, { nome: 'Fátima', sexo: 'f' }, { nome: 'Claudinéia', sexo: 'f' }]
    ```
- ## `randomFullName(total = 1, gender = 'any')`
  ## Parametros: 
  - ```howMany```: aceita somente valores inteiros. É o total de nomes que você deseja retornar
  - ```gender```: o gênero dos nomes, sendo que seus valor são: 
    - **f** para feminino
    - **m** para masculino
    - **any** para qualquer gênero
  ## Retorno: 
  Caso o valor de `howMany` seja 1, o retorno será um Objeto contendo o nome, sobrenome, nome completo e gênero. Caso seja maior que 1, o retorno é um array contendo objeto com as propriedades acima.
  ## Exemplo: 
  ```js
    const personGenerator = require('./Generates');
    const {randomFullName} = personGenerator

    randomFullName(3, 'm') 
  /*{
    nome: 'Felipe',
    sobrenome: 'Sales',
    nomeCompleto: [Function: nomeCompleto],
    sexo: 'm'
  },
  {
    nome: 'Fabricio',
    sobrenome: 'Araujo',
    nomeCompleto: [Function: nomeCompleto],
    sexo: 'm'
  },
  {
    nome: 'Vinicius',
    sobrenome: 'Araujo',
    nomeCompleto: [Function: nomeCompleto],
    sexo: 'm'
  }
]*/
  ``` 
