const fullName = require('../randomFullName')
const randomTel = require('../randomTel')
const cityState = require('../randomCity&State')
/**
 * Create as many people as you need
 * @param {number} howmany : howmany persons you want create
 * 
 */
function randomPerson(howmany) {
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
        for (let i = 0; i < howmany.length; i++) {
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