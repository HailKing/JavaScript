/* 

Question from URI 
Number: 1012

*/

const readline = require("readline")

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let a, b, c

reader.on("line", function(answer){
    let entrance = answer.split(" ")
    a = parseFloat(entrance[0])
    b = parseFloat(entrance[1])
    c = parseFloat(entrance[2])
    reader.close()
})

reader.on("close", () => {
    let ta = a * c / 2
    console.log(`TRIANGULO: ${ta.toFixed(3)}`)
    let pi = 3.14159
    let tc = c * c * pi
    console.log(`CIRCULO: ${tc.toFixed(3)}`)
    let tp = (a + b) * c / 2
    console.log(`TRAPEZIO: ${tp.toFixed(3)}`)
    let tq = b * b
    console.log(`QUADRADO: ${tq.toFixed(3)}`)
    let tr = a * b
    console.log(`RETANGULO: ${tr.toFixed(3)}`)
})
