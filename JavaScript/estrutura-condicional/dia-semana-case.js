let semana = parseInt(prompt("Digite o dia da semana em número:"))
let nomeSemana = ""

switch (semana) {
    case 1:
        nomeSemana = "Segunda"
        break
    case 2:
        nomeSemana = "Terça"
        break
    case 3:
        nomeSemana = "Quarta"
        break
    case 4:
        nomeSemana = "Quinta"
        break
    case 5:
        nomeSemana = "Sexta"
        break
    case 6:
        nomeSemana = "Sábado"
        break
    case 7:
        nomeSemana = "Domingo"
        break
    default:
        nomeSemana = "Nome inexistente"
}

console.log(nomeSemana)