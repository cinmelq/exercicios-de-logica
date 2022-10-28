let nota1 = parseFloat(prompt("Digite a primeira nota:"))
console.log(nota1.toFixed(1))

while (nota1 < 0 || nota1 > 10) {
    nota1 = parseFloat(prompt("Valor inválido! Tente novamente:"))
    console.log(nota1.toFixed(1))
}

let nota2 = parseFloat(prompt("Digite a segunda nota:"))
console.log(nota2.toFixed(1))

while (nota2 < 0 || nota2 > 10) {
    nota2 = parseFloat(prompt("Valor inválido! Tente novamente:"))
    console.log(nota2.toFixed(1))
}

let media = (nota1 + nota2) / 2
console.log("Média: " + media.toFixed(2))