const medio6 = require("prompt-sync")({siginit: true})

const texto = medio6("Introduce el texto --> ")

const mintexto = texto.toLowerCase()

let totalvocales = 0

    for (let i = 0; i < mintexto.length; i++) {
         if (
            mintexto.charAt(i) === "a" ||
            mintexto.charAt(i) === "e" ||
            mintexto.charAt(i) === "i" ||
            mintexto.charAt(i) === "o" ||
            mintexto.charAt(i) === "u" 
          ) {
            totalvocales = totalvocales + 1
         }
    }
    console.log("El texto tiene " + totalvocales + " vocales")




//     //Pide un texto y luego muestra el número de vocales que contiene.

// const ejercicio7 = require("prompt-sync")({sigint: true})

// const texto = ejercicio7("Introduce un texto -> ")
// const vocales = "aeiouAEIOU"

// let vocalesTotales = 0

// for (let i = 0; i < vocales.length; i++) {
//     for (let j = 0; j < texto.length; j++) {
//         if (texto.charAt(j) == vocales.charAt(i)) {
//             vocalesTotales = vocalesTotales + 1
//         }
//     }
// }
//console.log("Las vocales totales son -> " + vocalesTotales)