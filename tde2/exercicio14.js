function divisaoDeCinco(n1,n2){
    divisao = (n1+n2) % 5
    if (divisao == 0){
        return true
    }else{
        return false
    }
}
console.log(divisaoDeCinco(17,5))