let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//O "let" tem escopo global, função e bloco. Por isso faz toda diferença na definição na variável. 
//O JS procura primeiro a variável mais restrita (dentor do bloco { }) e depois a mais abrangente (global).