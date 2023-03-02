/*Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias*/ 

function idadeemdias(idade) {

    var dias = idade * 365
    return(`Tem ${dias} dias`)
}

console.log(idadeemdias(26))