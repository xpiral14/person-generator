const cityState = require('../randomCity&State')
const fullName = require('../randomFullName')
const randomTel = require('../randomTel')
/**
 * Create as many people as you need
 * @param {number} howmany : howmany persons you want create
 * 
 */
function randomPerson(howmany = 1) {
    if (isNaN(howmany) || howmany < 1) {
        throw 'Insira um número válido!'
    }
    let place = cityState()
    let name = fullName()
    let person;
    if (howmany === 1) {
        person = {
            name: name.nome,
            sexo: name.sexo,
            tel: randomTel(),
            estado: place.estado,
            cidade: place.cidade
        }
    } else {
        person = []
        for (let i = 0; i < howmany; i++) {
            person.push({
                name: name.nome,
                sexo: name.sexo,
                tel: randomTel(),
                estado: place.estado,
                cidade: place.cidade
            })
        }
    }
    return person
}

module.exports = randomPerson