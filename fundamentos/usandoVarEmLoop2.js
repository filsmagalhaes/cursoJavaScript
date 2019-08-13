const funcs = []

for (var i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// o Var não tem escopo de função, assim ele procurao valor global. Ou seja, o valor que saiu do laço (10).