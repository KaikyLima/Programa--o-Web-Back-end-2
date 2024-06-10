function imparOuPar (n1){
    let impar = n1 % 2;
    if(impar>0){
        return false
    }else{
        return true
    }
}

console.log(imparOuPar(2))