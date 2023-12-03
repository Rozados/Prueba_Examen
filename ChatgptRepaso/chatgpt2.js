//Crea una función llamada sumar que tome dos números como parámetros y devuelva su suma.

const chatgpt2 = require("prompt-sync")({siginit: true})

let num1 = chatgpt2("Introduce el primer numero --> ")

let num2 = chatgpt2("Introduce el segundo numero --> ")


suma(num1,num2)

function suma(x,y) {
    let resultado = Number(x) + Number(y)
    return console.log("La suma de los numeros es --> " + resultado )
}