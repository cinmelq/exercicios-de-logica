let distancia1 = parseFloat(prompt("Digite a distância:"))
console.log(distancia1)

let distancia2 = parseFloat(prompt("Digite a distância:"))
console.log(distancia2)

let distancia3 = parseFloat(prompt("Digite a distância:"))
console.log(distancia3)

if (distancia1 > distancia2 && distancia1 > distancia3) {
    console.log("Maior distância " + distancia1.toFixed(2))
} else {
    if (distancia2 > distancia3) {
        console.log("Maior distância " + distancia2.toFixed(2))
    } else {
        console.log("Maior distância: " + distancia3.toFixed(2))
    }
}