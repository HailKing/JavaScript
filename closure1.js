function closure(){
    arr = []

    for(let i = 0; i < 5; i++){
        arr.push(function(){ console.log(i) })
    }

    return arr
}

const c = closure()

c[2]()