const basico3 = require("prompt-sync")({siginit: true})

let numeros = basico3("Introduce los números --> ")

let suma = 0

let num 

while (numeros !== "cancelar") {
    if (Number(numeros)) {
        num = Number(numeros)
        suma = suma + num
    } else {
        console.log("Eso no es un numero;")
    }
    numeros = basico3("Introduce los números --> ")
}

console.log("La suma de los numeros es --> " + suma)