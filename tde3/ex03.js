/*3. Escreva uma função chamada mapearArray que aceita uma função e um array como parâmetros. 
A função mapearArray deve aplicar a função recebida a cada elemento do array e retornar um novo array com os elementos resultantes.*/

function mapearArray(func, array){
    let novoArray = []
    for(let i=0;i<array.length;i++){
        novoArray.push(func(array[i]))
    }
    return novoArray
}
const array = [1, 2, 3, 4, 5];
const func = x => x + 2;

const imprimirArray = mapearArray(func,array)

console.log(imprimirArray)