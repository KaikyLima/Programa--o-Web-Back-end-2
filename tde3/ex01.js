/* 1. Escreva uma função chamada encontrarMaiorElemento que aceita um array de números como parâmetro e retorna o maior elemento do array. */

function encontrarMaiorElemento(array){
    let maiorElemnto = array[0]
    for (let i = 1; i < array.length; i++){
        if(array[i] > maiorElemnto){
            maiorElemnto = array[i]
        }
    }
    return maiorElemnto
}

const array = [2,5,8,4,12,1]
console.log(encontrarMaiorElemento(array))