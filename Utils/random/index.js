/**
 * Get a random item from a list
 * @param {array} array 
 * @returns {any} the value of random item
 */
function random(array){
    return array[Math.floor(Math.random() * array.length)]
}
module.exports = random