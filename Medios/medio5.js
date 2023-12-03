// El ejercicio contendría funciones. El programa recibirá un número de comensales, y después a cuántos de ellos les gusta la tortilla de patata con cebolla y a cuántos sin cebolla.
// Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. 
// A cada comensal se le reservará media botella de vino. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes y bebida necesarias.

const medio5 = require("prompt-sync")({siginit: true})

const comensales = medio5("Introduce el número de comensales --> ")

const comensalesCebolla = medio5("Introduce el número de comensales con cebolla --> ")

const comensalesSinCebolla = Number(comensales) - Number(comensalesCebolla)

TCebolla(comensalesCebolla)

TsinCebolla(comensalesSinCebolla)

vino(comensales)

function TCebolla(x) {
    let patataCebolla = 200*x
    let huevosCebolla = 1*x
    let cebolla = 60*x
    console.log("Para la tortilla con Cebolla se necesitan: " + patataCebolla + " gramos de patatas " + huevosCebolla + " huevos " + cebolla + " gramos de cebolla")
}

function TsinCebolla(x) {
    let patata = 200*x
    let huevos = 1*x
    console.log("Para la tortilla sin Cebolla se necesitan: " + patata + " gramos de patatas " + huevos + " huevos " )
}

function vino(x) {
    let vino = 0.5*x
    console.log("Se necesitan : " + vino + " botellas de vino")
}