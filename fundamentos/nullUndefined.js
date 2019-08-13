/*
oBS: Conceitual de ATRIBUIÇÕES NAS VARIÁVEIS nos Lembretes e dicas */


let valor // não inicializada
console.log(valor) // foi declarado mas não possui valor: undefined (não aponta para nenhum objeto da memória)
//console.log(valor2) // nem foi declarado: not defined

valor = null // ausencia de valor. Pode-se usar quando quero zerar uma variável de tipo referência (aponta pra aobjeto,função..)
console.log(valor)
//console.log(valor.toString()) // Erro! não pode ler algo de uma variável nula.

const produto = {}
console.log(produto.preco) // o preco não foi definido (erro!)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
/*O valor 0 é um preço. O Valor Null é indefinido. Se eu quiser dar algum livro numa loja de graça 
o ideal seria atribbuir um valor nullo e não um valor 0 */

console.log(!!produto.preco)
console.log(produto)