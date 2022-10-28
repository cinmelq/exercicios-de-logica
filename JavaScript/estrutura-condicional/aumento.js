let salario = parseFloat(prompt("Digite o salário do funcionário"))
console.log("Salário: " + " R$ " + salario.toFixed(2))

if (salario <= 1000) {
    let aumento = salario * 0.2
    let novoSalario = salario + aumento
    console.log("Novo salário: " + " R$ " + novoSalario.toFixed(2))
    console.log("Aumento: " + " R$ " + aumento.toFixed(2))
    console.log("Porcentagem: " + "20%")
} else {
    if (salario <= 3000) {
        let aumento = salario * 0.15
        let novoSalario = salario + aumento
        console.log("Novo Salário: " + " R$ " + novoSalario.toFixed(2))
        console.log("Aumento: " + " R$ " + aumento.toFixed(2))
        console.log("Porcentagem: " + "15%")
    } else {
        if (salario <= 8000) {
            let aumento = salario * 0.10
            let novoSalario = salario + aumento
            console.log("Novo Salário: " + " R$ " + novoSalario.toFixed(2))
            console.log("Aumento: " + " R$ " + aumento.toFixed(2))
            console.log("Porcentagem: " + "10%")
        } else {
            let aumento = salario * 0.05
            let novoSalario = salario + aumento
            console.log("Novo Salário: " + " R$ " + novoSalario.toFixed(2))
            console.log("Aumento: " + " R$ " + aumento.toFixed(2))
            console.log("Porcentagem: " + "5%")
        }
    }
}