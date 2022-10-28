let nome = prompt("Nome do funcionário:")
let valorPorHora = parseFloat(prompt("Valor por hora:"))
let horasTrabalhadas = parseFloat(prompt("Horas trabalhadas:"))
let calculoDeHoras = horasTrabalhadas * valorPorHora

console.log("O pagamento para " + nome + " deve ser de " + calculoDeHoras.toFixed(2))