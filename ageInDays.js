/* 

Question from URI 
Number: 1020

*/

const readLine = require('readline')
const { stdin } = require('process')

const reader = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let n

reader.on('line', function(answer) {
    n = answer
    reader.close()
})

reader.on('close', function() {
    years = parseInt(n / 365)
    n -= 365 * years
    console.log(`${years} ano(s)`)
    months = parseInt(n / 30)
    n -= 30 * months
    console.log(`${months} mes(es)`)
    days = n
    console.log(`${days} dia(s)`)
})