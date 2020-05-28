// Answer to question 1011 from URI

var pi = 3.14159

var readline = require('readline')

var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question('', (answer) => {
    var radio = answer
    a = 4 / 3 * pi * (radio * radio * radio)
    console.log('VOLUME = ' + a.toFixed(3))
    reader.close()
})