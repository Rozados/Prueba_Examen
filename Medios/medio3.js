//Haz un programa con funciones que de como resultado si un número es par o no y que solo se acabe cuando se introduzca "salir". 
//Tendrá que comprobar si el número es correcto antes de comprobar si es par.

const medio3 = require("prompt-sync")({siginit: true})

let numero = medio3("Introduce un numero --> ")

while(numero !== "salir"){
esNumber(numero)
esPar(numero)
numero = medio3("Introduce un numero --> ")
}

function esNumber(x) {
    if (Number(x)) {
        console.log("Es un número válido")
    } else {
        console.log("No es un número válido")
    }
}

function esPar(x) {
    if (x%2 == 0) {
        console.log("Es Par")
    } else {
        console.log("Es Impar")
    }
}
