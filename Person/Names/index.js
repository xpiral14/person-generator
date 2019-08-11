let maleNames = ['Samuel', 'Erick', 'André', 'Felipe', 'Diego', 'Marcos', 'Luciano', 'Álvaro', 'Alexandre', 'Ricardo', 'Vinicius', 'Arthur', 'Thalles', 'Iago', 'Caio', 'João', 'Vitor', 'César', 'Lucas', 'Alex', 'Mateus'].map(nome => ({nome, sexo: 'm'}))

let femaleNames = ['Sabrina', 'Fátima', 'Luciana', 'Jade', 'Claudinéia', 'Maria', 'Joana', 'Amanda', 'Beatriz', 'Gabriela', 'Isabela'].map(nome => ({nome, sexo: 'f' }))

let anyName = [...maleNames, ...femaleNames]

module.exports = {
    maleNames,
    femaleNames,
    anyName
}