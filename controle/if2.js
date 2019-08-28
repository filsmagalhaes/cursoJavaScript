/*o uso do bloco é opcional dentro do if para apenas 1 sentença.
é uma boa pratica sempre colocar as { } */

function teste1(num) {
    if(num > 7)
        console.log(num) //js desconsidera identação
    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuidado com o ';', não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)