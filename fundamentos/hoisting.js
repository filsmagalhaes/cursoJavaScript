/* Hoisting: içamento (jogar pra cima). 
Em outras linguages os códigos obedecem a sequência de cima pra baixo. No JS as variáveis Var
sofrem o hoisting quando declaradas abaixo de uma sentença de código.
*/

console.log('a =', a)
var a = 2
console.log('a =', a)


/*
Não é uma boa prática declarar as variáveis depois. É sempre melhor declarar as variáveis antes.
*/

// OBS.: O feito de içamento não ocorre com o Let.

console.log('a =', a)
let a = 2
console.log('a =', a)
