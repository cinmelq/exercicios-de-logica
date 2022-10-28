let a = parseInt(prompt("Primeiro valor:"))
let b = parseInt(prompt("Segundo valor:"))
let c = parseInt(prompt("Terceiro valor:"))

if (a < b && c) {
    let menor = a
    console.log("Menor: " + menor)
} else {
    if (b < a && c) {
        let menor = b
        console.log("Menor: " + menor)
    } else {
        let menor = c
        console.log("Menor: " + menor)
    }
}