let mediaGlicose = parseFloat(prompt("Digite a média de glicose:"))
console.log("Média da glicose: " + mediaGlicose.toFixed(1))


if (mediaGlicose <= 100) {
    console.log("Normal")
} else {
    if (mediaGlicose <= 140) {
        console.log("Elevado")
    } else {
        console.log("Diabetes")
    }
}