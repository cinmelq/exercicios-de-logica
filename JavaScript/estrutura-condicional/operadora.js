let minutosConsumidos = parseInt(prompt("Digite a quantidade de minutos:"))
console.log("Minutos consumidos: " + minutosConsumidos)

let valorDoPlano = 50

let minutosDoPlano = 100


if (minutosConsumidos > minutosDoPlano) {
    let calculoValorApagar = (minutosConsumidos - minutosDoPlano) * 2 + valorDoPlano
    console.log("Valor a ser pago: " + " R$ " + calculoValorApagar.toFixed(2))
} else {
    console.log("Valor a ser pago: " + " R$ " + valorDoPlano.toFixed(2))
}