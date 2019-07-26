function randomInterval(from, to, type){
    let random = Math.floor(Math.random() * (to - from) + from + 1)
    switch(type){
        case 's': 
            random = random.toString()
            break;
        case 'n': 
            random = parseInt(random)
            break
        default:
            break;
        }
    return random
}
module.exports = randomInterval