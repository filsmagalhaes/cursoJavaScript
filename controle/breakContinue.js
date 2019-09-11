const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // funciona com o bloco mais próximo assossiado com o for, while ou switch.
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue // causa o desvio de fluxo pulando o índice que foi determinado no if.
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: //não usar (boas praticas)
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}