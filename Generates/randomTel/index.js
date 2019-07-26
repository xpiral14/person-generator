const randomInterval = require('../../Utils/randomInterval')
function generateTel(total = 1){
    let tels = []
    for(let i = 0; i < total; i++){
        tels.push(randomInterval(10,99, 's') + randomInterval(10000,99999, 's') + randomInterval(1000,9999, 's'))
    } 
    if(tels.length === 1) tels = tels.join("")

    return tels
}
module.exports = generateTel