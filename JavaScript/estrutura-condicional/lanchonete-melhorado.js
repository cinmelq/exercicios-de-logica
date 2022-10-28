let codigoProduto = parseInt(prompt("Código do produto comprado:"))

let valorProduto = ""

switch (codigoProduto) {
    case 1:
        valorProduto = 5.00
        break
    case 2:
        valorProduto = 3.50
        break
    case 3:
        valorProduto = 4.80
        break
    case 4:
        valorProduto = 8.90
        break
    case 5:
        valorProduto = 7.32
        break
    default:
}

if (codigoProduto <= 5) {
    let quantidadeComprada = parseInt(prompt("Quantidade comprada:"))
    let = valorTotal = quantidadeComprada * valorProduto
    console.log("Código do produto comprado: " + codigoProduto)
    console.log("Quantidade comprada: " + quantidadeComprada)
    console.log("Valor a pagar: " + " R$ " + valorTotal.toFixed(2))
} else {
    console.log("Código inválido")
}