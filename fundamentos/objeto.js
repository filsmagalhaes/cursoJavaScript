//criando objetos de forma literal. Em JS é uma coleção Chave/Valor

const prod1 = {} //criando objeto
prod1.nome = 'Celular Ultra Mega' //defino o que o objeto é de forma dinâmica.
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço 

console.log(prod1)

//outra forma de declarar o objeto

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

//posso criar objetos dentro de objetos

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
