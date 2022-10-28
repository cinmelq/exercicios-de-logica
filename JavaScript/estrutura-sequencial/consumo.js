let distanciaPercorrida = parseFloat(prompt("Distância percorrida: "))
console.log("Distância percorrida: " + distanciaPercorrida.toFixed(3))

let combustivelGasto = parseFloat(prompt("Combustível gasto:"))
console.log("Combustível Gasto: " + combustivelGasto.toFixed(3))

let mediaConsumo = distanciaPercorrida / combustivelGasto
console.log("Média de consumo: " + mediaConsumo.toFixed(3))