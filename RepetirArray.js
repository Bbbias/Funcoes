function repetir(x, y){
    var numeros = []
    for(var i = 1 ; i <= y; i++){
        numeros.push(x)
    }
    return numeros
}

console.log(repetir(7, 3))
console.log(repetir(5, 2))