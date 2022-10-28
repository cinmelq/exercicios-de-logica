let medidaA = parseFloat(prompt("Digite a medida A:"))
console.log("Medida A: " + medidaA)

let medidaB = parseFloat(prompt("Digite a medida B:"))
console.log("Medida B: " + medidaB)

let medidaC = parseFloat(prompt("Digite a medida C:"))
console.log("Medida C: " + medidaC)

let areaQuadrado = medidaA ** 2
console.log("Área do quadrado: " + areaQuadrado.toFixed(4))

let areaTriangulo = (medidaA * medidaB) / 2
console.log("Área do triangulo: " + areaTriangulo.toFixed(4))

let areaTrapezio = (medidaA + medidaB) * medidaC / 2
console.log("Área do Trapézio: " + areaTrapezio.toFixed(4))