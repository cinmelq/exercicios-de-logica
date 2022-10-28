function calcularValorAPagar(valorProduto, codigoProduto) {
    let quantidadeComprada = parseInt(prompt("Quantidade comprada:"))
    let valorTotal = quantidadeComprada * valorProduto
    console.log("Código do produto comprado: " + codigoProduto)
    console.log("Quantidade comprada: " + quantidadeComprada)
    console.log("Valor a pagar: " + " R$ " + valorTotal.toFixed(2))
}

let codigoProdutoDigitado = parseInt(prompt("Código do produto comprado:"))

switch (codigoProdutoDigitado) {
    case 1:
        calcularValorAPagar(5.00, codigoProdutoDigitado)
        break
    case 2:
        calcularValorAPagar(3.50, codigoProdutoDigitado)
        break
    case 3:
        calcularValorAPagar(4.80, codigoProdutoDigitado)
        break
    case 4:
        calcularValorAPagar(8.90, codigoProdutoDigitado)
        break
    case 5:
        calcularValorAPagar(7.32, codigoProdutoDigitado)
        break
    default:
        console.log("Código inválido")
}