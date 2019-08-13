/*
Em Java o Array é fixo (se crio com 5 posições, ele terá as 5 até o final). 
O Array no JS é fexivel e heterogêneo (aceita multiplos valores).
 */

 const valores = [7.7, 8.9, 6.3, 9.2]
 console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //Add novos elementos. É heterogêneo: Não é um boa prática. O correto é criar um array para cada tipo de dado.
console.log(valores)

console.log(valores.pop()) //tira o último valor do array
delete valores[0] //escolho qual índice vou excluir
console.log(valores)

console.log(typeof valores) // no JS o array é um objeto