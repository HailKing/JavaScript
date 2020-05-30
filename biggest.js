/* 

Question from URI 
Number: 1013

*/

let readline = require("readline")

let reader = readline.createInterface({
    input: process.stdin
})

function bigger(a, b){
    return (a + b + Math.abs(a - b)) / 2
}

let a, b, c

reader.on("line", (answer) => {
    entrance = answer.split(" ")
    a = parseInt(entrance[0])
    b = parseInt(entrance[1])
    c = parseInt(entrance[2])
    reader.close()
})

reader.on("close", () => {
    console.log(`${bigger(bigger(a, b), c)} eh o maior`)
})