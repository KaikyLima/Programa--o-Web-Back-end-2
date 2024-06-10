function somaPares(){
    let soma = 0
    for (let i = 1; i <=100; i++){
        if(i% 2 === 0){
            soma += i;
        }
    }
    return soma;
}

console.log(somaPares());