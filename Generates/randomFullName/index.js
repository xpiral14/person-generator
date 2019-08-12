const maleNames = require('../../Utils/Person/Names').maleNames
const femaleNames = require('../../Utils/Person/Names').femaleNames
const lastnames = require('../../Utils/Person/LastNames')
const any = require('../../Utils/Person/Names').anyName
const {
    random
} = require('../../Utils')
/**
 * Generate names as many you want
 * @param {number} total 
 * @param {string} gender 
 * 
 */
function randomFullName(total = 1, gender = 'any') {
    if (isNaN(total || total < 1 || typeof gender !== 'string' || gender !== 'any' || gender !== 'm' || gender !== 'f')) {
        return "Imposivel gerar nome Inteiro"
    }
    let fullName = []
    switch (gender) {
        case 'any':
            fullName.push(...randomPerson(total, any))
            break;
        case 'f':
            fullName.push(...randomPerson(total, femaleNames))
            break;
        case 'm':
            fullName.push(...randomPerson(total, maleNames))
            break;

        default:
            break;
    }

    function randomPerson(total, gender) {
        let person = []
        for (let i = 0; i < total; i++) {
            let nome = random(gender)
            let lastname = random(lastnames)
            person.push({
                nome: nome.nome,
                sobrenome: lastname,
                nomeCompleto: function () {
                    return `${this.nome} ${this.sobrenome}`
                },
                sexo: nome.sexo
            })
        }
        return person
    }
    if (fullName.length === 1) {
        fullName = fullName[0]
    }
    return fullName
}
module.exports = randomFullName