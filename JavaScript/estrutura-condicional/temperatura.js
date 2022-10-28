let escalaTemperatura = prompt("Você vai digitar a temperatuda em qual escala (C/F)?")
console.log(escalaTemperatura)

if (escalaTemperatura.toLowerCase() === "c") {
    let temperaturaCelsius = parseFloat(prompt("Digite a temperatura em Celsius: "))
    let calculoConversãoParaFahrenheit = temperaturaCelsius * 1.8 + 32
    console.log("Temperatura em Celsius: " + temperaturaCelsius.toFixed(2))
    console.log("Temperatura equivalente em Fahrenheit: " + calculoConversãoParaFahrenheit.toFixed(2))
} else {
    if (escalaTemperatura.toLowerCase() === "f") {
        let temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "))
        let calculoConversãoParaCelsius = (5 / 9) * ((temperaturaFahrenheit - 32))
        console.log("Temperatura em Fahrenheit: " + temperaturaFahrenheit.toFixed(2))
        console.log("Temperatura Equivalente em Celsius " + calculoConversãoParaCelsius.toFixed(2))
    } else {
        console.log("Valor inválido")
    }
}