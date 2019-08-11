let maleNames = ['Samuel', 'Erick', 'André', 'Felipe', 'Diego', 'Marcos', 'Luciano', 'Álvaro', 'Alexandre', 'Ricardo', 'Vinicius', 'Arthur', 'Thalles', 'Iago', 'Caio', 'João', 'Vitor', 'César', 'Lucas', 'Alex', 'Mateus', 'Renato', 'Pedro', 'Rodrigo', 'Jonas', 'Jenrique', 'Fernando', 'Vicente', 'Rômulo', 'Felipe', 'Diego', 'Daniel', 'Michel', 'Fabricio'].map(nome => ({nome, sexo: 'm'}))

let femaleNames = ['Sabrina', 'Fátima', 'Luciana', 'Jade', 'Claudinéia', 'Maria', 'Joana', 'Amanda', 'Beatriz', 'Gabriela', 'Isabela', 'Brenda', 'Jenifer', 'Luíza', 'Patricia', 'Assunção', 'Eduarda', 'Michelle', 'Fabricia', 'Daniela', 'Isabel', 'Cláudia'].map(nome => ({nome, sexo: 'f' }))

let anyName = [...maleNames, ...femaleNames]

module.exports = {
    maleNames,
    femaleNames,
    anyName
}