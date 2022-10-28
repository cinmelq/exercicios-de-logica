let largura = prompt("Digite a largura do terreno:")
console.log(largura)

let comprimento = prompt("Digite o comprimento do terreno:")
console.log(comprimento)

let metroQuadrado = prompt("Digite o metro quadrado do terreno:")
console.log(metroQuadrado)

let areaDoTerreno = largura * comprimento
console.log("Area do terreno: " + areaDoTerreno.toFixed(2))

let precoDoTerreno = areaDoTerreno * metroQuadrado
console.log("Preço do terreno: " + precoDoTerreno.toFixed(2))