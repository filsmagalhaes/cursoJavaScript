const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidado!!!

/*
Como a JS é uma linguagem fracamente tipada ela vai tentar comparar a nota 'epa' com >=7. 
Como não é um numero ele vai informar 'reprovado'. Esse tipo de situação deverá gerar umaa exceção
e não executar o código com um dado != de numero.  
*/