let x = parseFloat(prompt("Digite o valor de X:"))
console.log("Valor de X: " + x.toFixed(1))

let y = parseFloat(prompt("Digite o valor de Y:"))
console.log("Valor de Y: " + y.toFixed(1))

if (x === 0 && y === 0) {
    console.log("Origem")
} else {
    if (x < 0 && y < 0) {
        console.log("Q3")
    } else {
        if (x > 0 && y > 0) {
            console.log("Q1")
        } else {
            if (x < 0 && y > 0) {
                console.log("Q2")
            } else {
                if (x > 0 && y < 0) {
                    console.log("Q4")
                } else {
                    if (x === 0) {
                        console.log("Eixo Y")
                    } else {
                        console.log("Eixo X")
                    }
                }
            }
        }
    }
}