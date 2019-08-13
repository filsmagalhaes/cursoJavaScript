console.log(typeof Object) //função
console.log(typeof new Object) //objeto (instanciando uma função) é como chamar um construtor no java.

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6) // a classe internamente é uma função.
console.log(typeof Produto)
console.log(typeof new Produto()) //pode sere executado com ou sem os parenteses.