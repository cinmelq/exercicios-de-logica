let horaInicial = parseInt(prompt("Digite a hora inicial do jogo:"))
console.log("Horar inicial: " + horaInicial)

let horaFinal = parseInt(prompt("Digite a hora final do jogo:"))
console.log("Horar final: " + horaFinal)

if (horaInicial < horaFinal) {
    let duracao = horaFinal - horaInicial
    console.log("Duração do jogo: " + duracao + " horas")
} else {
    let duracao = 24 - horaInicial + horaFinal
    console.log("Duraçao do jogo: " + duracao + " horas")
}