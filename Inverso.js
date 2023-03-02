function inverso(valor){
    if(typeof(valor) === 'number'){
        -valor
        return valor
    }
    else if(typeof(valor) === 'boolean'){
        return !valor
    }
    else{
        return (`booleano ou numérico esperados, mas o parâmetro é do tipo ${typeof(valor)}`)
    }
}

console.log(inverso(45))
console.log(inverso(true))
console.log(inverso("lua"))