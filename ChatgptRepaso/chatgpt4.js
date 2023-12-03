//Crea una función llamada evaluarCalificacion que tome una calificación como argumento y devuelva un mensaje según la siguiente escala:
//90 o más: "A"
//80-89: "B"
//70-79: "C"
//Menos de 70: "F"

const chatgpt4 = require("prompt-sync")({siginit: true})

const nota = chatgpt4("Introduce tu nota --> ")

evaluarCalificacion(nota)

function evaluarCalificacion(x) {
    if (x >= 90) {
        console.log("Tu calificación es --> A")
    } else if(x >=80) {
        console.log("Tu calificación es --> B")
    } else if(x >= 70) {
        console.log("Tu calificación es --> C")
    } else if(x < 70){
        console.log("Tu calificación es --> F")
    }
}