function contando(arr) {
    let soma = 0
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i]
    }
    let divisao = soma / arr.length
    return divisao.toFixed(2)
}

let idade1 = parseInt(prompt("Digite uma idade"))
console.log(idade1)

if (idade1 >= 0) {

    let idades = []

    while (idade1 >= 0) {
        idades.push(idade1)

        idade1 = parseInt(prompt("Digite outra idade"))
        console.log(idade1)
    }

    let media = contando(idades)
    console.log("MÉDIA: " + media)
} else {
    console.log("Impossível calcular")
}