let precoUnitarioDoProduto = parseFloat(prompt("Digite o valor unitário do produto:"))
console.log("Valor unitário: " + precoUnitarioDoProduto.toFixed(2))

let quantidadeDeProdutos = parseFloat(prompt("Digite a quantidade:"))
console.log("Quantidade de produtos: " + quantidadeDeProdutos)

let valorTotalDosProdutos = precoUnitarioDoProduto * quantidadeDeProdutos
console.log("Valor total: " + valorTotalDosProdutos)

let valorRecebido = parseInt(prompt("Digite o valor recebido:"))
console.log("Valor Recebido: " + valorRecebido)

if (valorRecebido >= valorTotalDosProdutos) {
    let troco = valorRecebido - valorTotalDosProdutos
    console.log("TROCO: " + troco.toFixed(2) + " REAIS")
} else {
    let valorFaltante = valorTotalDosProdutos - valorRecebido
    console.log("DINHEIRO INSUFICIENTE. FALTAM " + valorFaltante.toFixed(2) + " REAIS.")
}