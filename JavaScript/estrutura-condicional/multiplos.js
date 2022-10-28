let numeroInteiro1 = parseInt(prompt("Digite dois números inteiros:"))
console.log(numeroInteiro1)

let numeroInteiro2 = parseInt(prompt("Digite dois números inteiros:"))
console.log(numeroInteiro2)

if (numeroInteiro1 % numeroInteiro2 === 0 || numeroInteiro2 % numeroInteiro1 === 0) {
    console.log("São multiplos")
} else {
    console.log("Não são multiplos")
}