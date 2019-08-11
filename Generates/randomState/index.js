const cityEstate = require('../../Cidade&Estado/index')
const {
    estados
} = cityEstate
const random = require('../../Utils/random')
function generateState(howMany = 1) {

    if (howMany < 2) {
        return random(estados).nome
    } else {
        let result = []
        for (let i = 1; i <= howMany; i++) {
            result.push(random(estados).nome)
        }
        return result;
    }

}
module.exports = generateState