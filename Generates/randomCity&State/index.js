//Cities and states
let cE = require('../../Cidade&Estado')
const random = require('../../Utils/random')
let {
    estados
} = cE

function cityState(howmany = 1) {
    if(isNaN(howmany) || howmany < 1) throw "Impossivel gerar Estado com cidade"
    let result
    let cityState;
    if (howmany === 1) {
        cityState = random(estados)
        result = {
            sigla: cityState.sigla,
            estado: cityState.nome,
            cidade: random(cityState.cidades)
        }
    } else {
        result = []
        cityState = random(estados)
        for (let i = 1; i <= howmany; i++) {
            cityState = random(estados)
            result.push({
                sigla: cityState.sigla,
                estado: cityState.nome,
                cidade: random(cityState.cidades)
            })
        }
    }
    return result;
}
module.exports = cityState