/* 4. Escreva uma função chamada filtrarArray que aceita uma função de filtro e um array como parâmetros. 
A função de filtro deve retornar true caso o elemento deva permanecer no array e false caso contrario. 
A função filtrarArray deve aplicar essa função a todos os elementos e retornar um novo array apenas com os elementos restantes*/

const filtrarArray = (arr, filtro) => {
    const newArr = []

    for(let element of arr){
        const vaiFicar = filtro(element)
        if(vaiFicar) newArr.push(element)
    }
    return newArr
}

const arr = [1,2,3,4,5,6,7,8,9,10]
const newArr = filtrarArray(arr, (e) => e%2===0 )
console.log(newArr)