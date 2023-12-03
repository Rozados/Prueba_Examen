//Crea una función llamada esNumeroPar que tome un número como argumento y devuelva true si es par y false si es impar.

const chatgpt3 = require("prompt-sync")({siginit: true})

const numero = chatgpt3("Introduce un número --> ")

esPar(numero)

function esPar(x) {
    if (x%2 == 0) {
        return console.log("Es Par")
    } else{
        return console.log("Es Impar")
    }
}