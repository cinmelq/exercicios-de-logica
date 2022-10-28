let codigoProduto = parseInt(prompt("Código do produto comprado:"))
console.log("Código do produto: " + codigoProduto)

let quantidadeComprada = parseInt(prompt("Quantidade comprada:"))
console.log("Quantidade comprada: " + quantidadeComprada)

let valorProduto = 0

switch (codigoProduto) {
    case 1:
        valorProduto = 5.00 * quantidadeComprada
        break
    case 2:
        valorProduto = 3.50 * quantidadeComprada
        break
    case 3:
        valorProduto = 4.80 * quantidadeComprada
        break
    case 4:
        valorProduto = 8.90 * quantidadeComprada
        break
    case 5:
        valorProduto = 7.32 * quantidadeComprada
        break
    default:
}

console.log("Valor total do produto: " + " R$ " + valorProduto.toFixed(2))