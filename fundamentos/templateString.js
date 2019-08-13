//É delimitado pela "backTick" (crase) e a expressão segue o modelo ` ${} `

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' //Apenas com concatenação

const template = `
Olá
${nome}!`

console.log(concatenacao, template)

//Expressões

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase() //função com atribbuição.
console.log(`Ei... ${up('cuidado')}!`)