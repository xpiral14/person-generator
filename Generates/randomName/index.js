const maleNames = require('../../Utils/Person/Names').maleNames
const femaleNames = require('../../Utils/Person/Names').femaleNames
const any = require('../../Utils/Person/Names').anyName
const {random} = require('../../Utils')
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
                names.push(random(any).nome)
            }
            break;
        case 'm':
            for (i = 0; i < total; i++) {
                names.push(random(maleNames).nome)
            }
            break;
        case 'f':
            for (i = 0; i < total; i++) {
                names.push(random(femaleNames)).nome
            }
            break;
    }
    if(names.length === 1){
        names = names[0].nome
    }
    return names
}
module.exports = randomName