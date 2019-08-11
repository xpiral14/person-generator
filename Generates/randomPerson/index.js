const fullName = require('../randomFullName')
const randomTel = require('../randomTel')
const cityState = require('../randomCity&State')

function randomPerson(){
    let place = cityState()
    let name = fullName()
    let person = {
        name: name.nome,
        sexo: name.sexo,
        tel: randomTel(),
        estado: place.estado,
        cidade: place.cidade
    }
    return person
}

console.log(randomPerson());