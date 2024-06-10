const gerarLista = (n, gerarNumero)=> {
    const newArr = []
    for (let i =0; i<n;i++){
        const element = gerarNumero(i)
        newArr.push(element)
    }
    return newArr
}

const arrayGerado = gerarLista(4, (regraNum) => regraNum*3)

console.log(arrayGerado)