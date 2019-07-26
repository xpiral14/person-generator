const maleNames = require('../../Person/Names').maleNames
const femaleNames = require('../../Person/Names').femaleNames
const lastnames = require('../../Person/LastNames')
const any = require('../../Person/Names').anyName
const random = require('../../Utils/random')

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

        default: break;
    }

    function randomPerson(total, gender) {
        let person = []
        for (let i = 0; i < total; i++) {
            person.push(random(gender) + ' ' + random(lastnames))
        }
        return person
    }
    if(fullName.length === 1){
        fullName = fullName.join("")
    }
    return fullName
}
console.log(randomFullName(2, 'any'));