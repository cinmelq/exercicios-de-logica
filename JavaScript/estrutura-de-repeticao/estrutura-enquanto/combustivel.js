let codigo = parseInt(prompt("Informe um número para iniciar"))

let alcool = []
let gasolina = []
let diesel = []

while (codigo < 4 || codigo > 4) {
    codigo = parseInt(prompt("Informe um código (1, 2, 3) ou 4 para parar:"))
    console.log(codigo)

    if (codigo === 1) {
        alcool.push(codigo)
    } else if (codigo === 2) {
        gasolina.push(codigo)
    } else if (codigo === 3) {
        diesel.push(codigo)
    } else { "FIM" }
}

console.log("Muito obrigado!")

console.log("Alcool: " + alcool.length + " Gasolina: " + gasolina.length + " Diesel: " + diesel.length)