const cityEstate = require('../../Utils/Cidade&Estado/index')
const {random} = require('../../Utils')
const {
    estados
} = cityEstate
/**
 * Create as many city as you need
 * @param {number} howMany 
 */
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