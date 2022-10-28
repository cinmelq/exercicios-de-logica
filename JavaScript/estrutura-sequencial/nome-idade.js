let nome = prompt("Dados da primeira pessoa:")
let idade = parseInt(prompt("Digite a idade da primeira pessoa:"))

let nome2 = prompt("Dados da segunda pessoa:")
let idade2 = parseInt(prompt("Digite a idade da segunda pessoa:"))

let mediaIdades = (idade + idade2) / 2

console.log("A idade média entre " + nome + " e " + nome2 + " é: " + mediaIdades.toFixed(1))