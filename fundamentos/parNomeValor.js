// par nome/valor
const saudacao = 'Opa' // contexto léxico 1 - local onde a variável foi definida fisicamente

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2 - contexto de variável dentro da função
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = { //objeto com coleção de nome/valor
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)