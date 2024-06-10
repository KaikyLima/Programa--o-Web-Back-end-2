/*5. Escreva uma função chamada validarDados que aceita uma função de validação e um objeto como parâmetros. 
A função deve usar a função de validação para verificar se os dados no objeto atendem à condição especificada e retornar true se sim, ou false caso contrário.
 (Ex. nome possui mais de 3 caracteres, senha existe, etc)*/

 const validarDados = (obj, validarObj) =>{
    const ehValido = validarObj(obj)
    if (ehValido) return true
    return false
 }

 const pessoa = {
    nome: "Kaiky"
 }

 const validarNome = (pessoa) =>{
    return pessoa.nome.length > 3
 }

 const result = validarDados(pessoa,validarNome)
console.log(result)