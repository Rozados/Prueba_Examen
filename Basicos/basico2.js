const basico2 = require("prompt-sync")({siginit: true})

const nota = basico2("Introduce tu nota --> ")

if (nota < 3) {
    console.log("Tu calificación es Muy Deficiente")
} else if (nota < 5) {
    console.log("Tu calificación es Insuficiente")
} else if (nota < 6) {
    console.log("Tu calificación es Suficiente")
} else if (nota < 7) {
    console.log("Tu calificación es Bien")
} else if (nota < 9) {
    console.log("Tu calificación es notable")
} else if (nota <= 10) {
    console.log("Tu calificación es sobresaliente")
} 