// Armazenando uma função em uma variável

const imprimirSoma = function (a, b){
    console.log(a+b)
    }

imprimirSoma(2,3)

// Armazenando uma função arrow em uma variável
// ter uma forma reduzida de uma função

const soma = (a,b) => { //o arrow substitui o nome "function"
    return a + b
}

console.log(soma(2,3))

// Retorno implicito (arrow function)

const subtracao = (a,b) => a - b // não ter o corpo da função { } significa que tenho uma função de uma única linha (parâmetros (a,b) + retorno (a-b).
console.log(subtracao(2,3))

const imprimirA = a => console.log(a) //declarando apenas 1 parâmetro eu posso eliminar os ()
imprimirA("olá!!!!")