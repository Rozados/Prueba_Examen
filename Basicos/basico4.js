const basico4 = require("prompt-sync")({siginit: true})

let textos = basico4("Introduce un texto --> ")

let cadena 

while (textos !== "cancelar") {
    cadena = cadena + "-" + textos

    textos = basico4("Introduce un texto --> ")
}

console.log("Esta es la cadena de textos --> " + cadena )