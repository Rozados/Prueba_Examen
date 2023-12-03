//Crea una función llamada saludar que tome un nombre como argumento y devuelva un saludo.

const chatgpt1 = require("prompt-sync")({siginit: true})

const nombre = chatgpt1("Introduce tu nombre --> ")


saludar(nombre)

function saludar(nombrefunc) {
    return console.log("Hola " + nombrefunc + "!")
}
