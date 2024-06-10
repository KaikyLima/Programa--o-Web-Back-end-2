function calcularFatorial(n1){
    let fatorial = 1
    for (let i=1; i<= n1; i++){
        fatorial *=i;
    }
    return fatorial
}

console.log(calcularFatorial(4))