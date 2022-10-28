let coordenadaX = parseFloat(prompt("Digite o valor da coordenada X:"))
console.log(coordenadaX)

let coordenadaY = parseFloat(prompt("Digite o valor da coordenada Y:"))
console.log(coordenadaY)

while (coordenadaX !== 0 && coordenadaY !== 0) {
    if (coordenadaX > 0 && coordenadaY > 0) {
        console.log("Q1")
    } else {
        if (coordenadaX < 0 && coordenadaY > 0) {
            console.log("Q2")
        } else {
            if (coordenadaX < 0 && coordenadaY < 0) {
                console.log("Q3")
            } else {
                console.log("Q4")
            }
        }
    }
    coordenadaX = parseFloat(prompt("Digite o valor da coordenada X:"))
    console.log(coordenadaX)

    coordenadaY = parseFloat(prompt("Digite o valor da coordenada Y:"))
    console.log(coordenadaY)
}