// exemplo 1

let hora = parseInt(prompt("Digite uma hora do dia:"))
console.log(hora)

if (hora < 12) {
    console.log("Bom dia!")
} else {
    if (hora >= 12 && hora < 18) {
        console.log("Boa tarde!")
    } else {
        console.log("Boa noite!")
    }
}


// exemplo 2
let hora2 = parseInt(prompt("Digite uma hora do dia:"))
console.log(hora2)

if (hora2 < 12) {
    console.log("Bom dia!")
} else {
    if (hora2 < 18) {
        console.log("Boa tarde!")
    } else {
        console.log("Boa noite!")
    }
}