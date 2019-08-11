const cityEstate = require('../../Cidade&Estado/index')
const random = require('../../Utils/random')
const {
    estados
} = cityEstate

function generateCity(howMany = 1) {
    let result;
    if (howMany === 1) {
        result = random(estados).cidades
        return random(result)
    }else{
        result = []
        let {cidades} = random(estados)
        for(let i = 0; i < howMany; i++){
            result.push(random(cidades))
        }
        return result
    }
}

module.exports = generateCity