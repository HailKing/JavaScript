const sayHello = (function(){
    var message = 'Hello!'
    console.log(message)
    function sayHello(){
        console.log(message)
    }
    return sayHello
})()

const t = sayHello
t()