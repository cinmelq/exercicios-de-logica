let duracao = parseFloat(prompt("Digite os segundos:"))
console.log(duracao)

let horas = duracao / 3600
let resto = duracao % 3600
let minutos = resto / 60
let segundos = resto % 60

console.log(horas.toFixed(0) + ":" + minutos.toFixed(0) + ":" + segundos.toFixed(0))