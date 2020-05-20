const { hello } = require('./module1')

console.log(`${hello()} from the other side`)

function why() {
    return `I must have called a thousand times`
}

module.exports = {
    why
}
