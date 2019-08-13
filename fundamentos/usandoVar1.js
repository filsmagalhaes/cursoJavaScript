/*Escopo: até onde a varoável é acessivel/visivel. 
Em outras linguagens a variável só estaria visivel dentro do bloco específico (escopo).
No JS o "var" é visivel dentro e fora do bloco. 

O "Var" Tem 2 escopos possíveis:

OU ela é a nível global (todos podem ver e alterar/subscrever) ou ela é no escopo de função (visivel apenas na função).
*/

{ 
    { 
        { 
            { 
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

// dentro da função a variável var é acessivel/visivel apenas no escopo da função: { }

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)

/*
Dentro de JS não interessante utilizar o Var como variável global. Outros podem acessar essa variável,
alterar de intreger para sting (por ex.) e provocar um grande erro no sistema.
*/