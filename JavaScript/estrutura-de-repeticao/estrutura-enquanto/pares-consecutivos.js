function somando(arr) {
    let soma = 0
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i]
    }
    return soma
}

let x = parseInt(prompt("Digite um número inteiro:"))

soma = 0

while (x !== 0) {

    let primeiroNumeroPar = ([x, x + 2, x + 4, x + 6, x + 8])
    let arrPar = primeiroNumeroPar
    let primeiroNumeroImpar = ([x + 1, x + 3, x + 5, x + 7, x + 9])
    let arrImpar = primeiroNumeroImpar

    if (x % 2 === 0) {
        soma = somando(arrPar)
        console.log(soma)
    } else {
        soma = somando(arrImpar)
        console.log(soma)
    }

    x = parseInt(prompt("Digite um número inteiro:"))
}