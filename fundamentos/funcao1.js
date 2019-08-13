/* Função sem retorno. 
obs.: Nunca é explicito quando uma função retorna algo. As vezes retorna, as vezes n.*/

function imprimirSoma(a, b){ //não usamos var, let ou const. A e B pode ser qualquer coisa (inteiro, string etc_)
    console.log(a + b)
}

imprimirSoma(2 ,3)
imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // só imprime os 2 primeiros, não dá erro como outras linguagens.
imprimirSoma() // continua retornado. Mostrará NaN. Sem erros.

// Funcao com retorno

function soma(a, b = 1) {
    return a + b
}

//soma (2 + 3) essa chamada não imprime no console pois a função possui um retorno.
console.log(soma(2, 3)) //preciso chamar a função no console.log()
console.log(soma(2)) //é somado, pois defini o valor do segundo parâmetro;
console.log(soma())
