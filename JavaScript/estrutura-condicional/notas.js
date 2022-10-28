let primeiraNota = parseFloat(prompt("Digite a primeira nota:"))
console.log("Sua primeira nota é: " + primeiraNota.toFixed(1))

let segundaNota = parseFloat(prompt("Digite a segunda nota:"))
console.log("Sua segunda nota é: " + segundaNota.toFixed(1))

let notaFinal = (primeiraNota + segundaNota)
console.log("Nota final: " + notaFinal.toFixed(1))

if (notaFinal < 60) {
    console.log("REPROVADO")
} else {
    console.log("APROVADO")
}