//string por ser delimitada por: '', "" ou `` para "tamplate string";

const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // começa pelo 0 e traz 3 caracteres

console.log('Escola '.concat(escola).concat("!")) //posso substituir por + para concatenar
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) //quebra a string em array
