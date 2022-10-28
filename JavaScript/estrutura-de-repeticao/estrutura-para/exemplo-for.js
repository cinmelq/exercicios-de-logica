let quantidadeDeNumeros = parseInt(prompt("Quantos números serão digitados?"))
console.log("Quantidade de números: " + quantidadeDeNumeros)

let soma = 0
for (let i = 1; i <= quantidadeDeNumeros; i++) {
    let numeros = parseInt(prompt("Digite um número:"))
    console.log(numeros)
    soma = soma + numeros
}

console.log(`SOMA = ${soma}`)