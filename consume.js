/* 

Question from URI 
Number: 1014

*/

let readline = require("readline"), counter = 0
let entrance = []

reader = readline.createInterface({
    input: process.stdin
})

reader.on("line", (answer) => {
    entrance.push(answer)
    if (entrance.length == 2){
        reader.close()
    }
})

reader.on("close", () => {
    let consume = parseInt(entrance[0]) / parseFloat(entrance[1])
    console.log(`${consume.toFixed(3)} km/l`)
})