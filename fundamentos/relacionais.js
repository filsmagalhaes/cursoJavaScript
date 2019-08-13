console.log('01)', '1' == 1) //considerando valor
console.log('02)', '1' === 1) //estritamento igual (===) compara valor e tipo.
console.log('03)', '3' != 3) //considerando valor
console.log('04)', '3' !== 3) //estritamento diferente (!==) compara valor e tipo.

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) //obs.: 0 é data de referencia do JS: 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) //mesmo tipo e mesmo valor. daria igual para ==

console.log('12)', undefined == null)
console.log('13)', undefined === null)

//via de regra é melhor trabalhar com o === ou  !==. POis == ou != ignora os tipos.