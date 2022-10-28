let baseRetangulo = prompt("Digite a base do retângulo:")
console.log("Base do retângulo: " + baseRetangulo)

let alturaRetangulo = prompt("Digite a altura do retângulo:")
console.log("Altura do retângulo: " + alturaRetangulo)

let areaRetangulo = baseRetangulo * alturaRetangulo
console.log("Área do retângulo: " + areaRetangulo.toFixed(4))

let perimetroRetangulo = 2 * baseRetangulo + 2 * alturaRetangulo
console.log("Perimetro do retângulo: " + perimetroRetangulo.toFixed(4))

let diagonalRetangulo = Math.sqrt(baseRetangulo ** 2 + alturaRetangulo ** 2)
console.log("Diagonal do retângulo: " + diagonalRetangulo.toFixed(4))