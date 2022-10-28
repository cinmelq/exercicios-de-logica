let senhaDigitada = parseInt(prompt("Digite a senha:"))
console.log(senhaDigitada)

let senha = 2002

while (senhaDigitada !== senha) {
    senhaDigitada = parseInt(prompt("Senha inválida, tente novamente:"))
    console.log(senhaDigitada)
}

console.log("Acesso permitido.")