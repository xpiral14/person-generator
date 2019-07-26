const randomFullname = require('../randomFullName')
const randomTel = require('../randomTel')
function randomPerson(){
    let person = {
        name: randomFullname(),
        tel: randomTel()
    }
    return person
}

console.log(randomPerson());