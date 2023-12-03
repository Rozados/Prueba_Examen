const basico1 = require("prompt-sync")({siginit: true})

const nombre = basico1("Introduce tu nombre --> ")

const edad= basico1("Introduce tu edad --> ")

if (edad<18) {
    console.log("No puedes conducir")
} else {
    console.log("Puedes conducir")
}