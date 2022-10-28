let coeficienteA = parseFloat(prompt("Coeficiente A:"))
let coeficienteB = parseFloat(prompt("Coeficiente B:"))
let coeficienteC = parseFloat(prompt("Coeficiente C:"))

let delta = coeficienteB ** 2 - 4 * coeficienteA * coeficienteC

if (coeficienteA === 0 || delta < 0) {
    console.log("Esta equação não possui raizes reais.")
} else {
    let x1 = (-coeficienteB + Math.sqrt(delta)) / (2 * coeficienteA)
    console.log("x1 = " + x1.toFixed(4))
    let x2 = (-coeficienteB - Math.sqrt(delta)) / (2 * coeficienteA)
    console.log("x2 = " + x2.toFixed(4))
}