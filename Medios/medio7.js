const medio7 = require("prompt-sync")({siginit: true})

const año = medio7("Introduce un año --> ")

bisiesto(año)

function bisiesto(x) {
    if (x%400 == 0 && x%100 !== 0) {
        console.log("Es un año bisiesto")
    } else if (x%4 == 0 && x%100 !== 0) {
        console.log("Es un año bisiesto")
    } else {
        console.log("No es un año bisiesto")
    }
}