let valorDaUnidade = parseInt(prompt("Preço unitário do produto:"))
console.log("Preço da unidade: " + valorDaUnidade.toFixed(2))

let quantidadeComprada = parseInt(prompt("Quantidade de mercadorias:"))
console.log("Quantidade: " + quantidadeComprada.toFixed(0))

let dinheiroRecebido = parseInt(prompt("Valor recebido:"))
console.log("Valor recebido: " + dinheiroRecebido.toFixed(2))

let troco = dinheiroRecebido - (quantidadeComprada * valorDaUnidade)
console.log("Troco: " + troco.toFixed(2))