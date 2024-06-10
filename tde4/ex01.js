const somarPar = (n1,n2, callbackSucesso, callBackError) => {
    let resultado = n1 + n2;
    if (resultado % 2 ===0){
        callbackSucesso (resultado)
    }else{
        callBackError (resultado)
    }
}
function callbackSucesso(resultado) {
    console.log(`Sucesso. O resultado da soma é ${resultado}, que é um número par.`);
}

function callbackError(resultado) {
    console.log(`Operação falhou. O resultado da soma é ${resultado}, que é um número ímpar.`);
}

somarPar(2, 8, callbackSucesso, callbackError);

function somarParPromisse(n1,n2){
    return new Promise((callbackSucesso, callBackError) => {
        let resultado = n1 + n2;
    if (resultado % 2 ===0){
        callbackSucesso (resultado)
    }else{
        callBackError (resultado)
    }
    })
}

somarParPromisse(2,1).then(resultado => {
    console.log(`Operação concluída com sucesso. O resultado da soma é ${resultado}, que é um número par.`);
}).catch(resultado =>{
    console.log(`Operação falhou. O resultado da soma é ${resultado}, que é um número ímpar.`);

})