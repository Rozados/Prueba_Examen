//Crea una función llamada obtenerLongitud que tome una cadena como argumento y devuelva la longitud de esa cadena.

const chatgpt5 = require("prompt-sync")({siginit: true})

const cadena = chatgpt5("Introduce la cadena -->")

obtenerLongitud(cadena)

function obtenerLongitud(x) {
    console.log("La longitud de la cadena es --> " + x.length)
}