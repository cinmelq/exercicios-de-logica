let x = parseInt(prompt("Digite o primeiro número"))
console.log(x)

let y = parseInt(prompt("Digite o segundo número"))
console.log(y)

while (x != y) {
    if (x < y) {
        console.log("CRESCENTE")
    } else {
        console.log("DECRESCENTE")
    }

    x = parseInt(prompt("Digite o primeiro número"))
    console.log(x)

    y = parseInt(prompt("Digite o segundo número"))
    console.log(y)
}