function salario(horas, valor){
    let total = horas * valor
    return(`Salário igual a R$${total}`)
}

console.log(salario(88, 8.75))