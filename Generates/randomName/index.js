const maleNames = require('../../Person/Names').maleNames
const femaleNames = require('../../Person/Names').femaleNames
const any = require('../../Person/Names').anyName

function randomName(t = 1, gender = 'any') {
    if (isNaN(t)) {
        return "Impossivel gerar pessoa"
    }
    let total = parseInt(t)

    let names = []
    let i
    switch (gender) {
        case 'any':
            for (i = 0; i < total; i++) {
                names.push(any[Math.floor(Math.random() * any.length)])
            }
            break;
        case 'm':
            for (i = 0; i < total; i++) {
                names.push(maleNames[Math.floor(Math.random() * maleNames.length)])
            }
            break;
        case 'f':
            for (i = 0; i < total; i++) {
                names.push(femaleNames[Math.floor(Math.random() * femaleNames.length)])
            }
            break;
    }
    if(names.length === 1){
        names = names.join("")
    }
    return names
}
module.exports = randomName