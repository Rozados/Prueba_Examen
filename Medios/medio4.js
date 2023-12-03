const ejercicio4 = require("prompt-sync")({sigint: true})

const numAleatorio = Math.floor(Math.random()*101);

let acierto = false

while (!acierto){
    const numero = ejercicio4("[+] Introduce un número -> ")
    if(esCorrecto(numero)){
        if(numero == numAleatorio){
            acierto = true
        } else if (numAleatorio > numero){
            console.log("[!] Tira por lo alto...\n")
        } else {
            console.log("[!] Tira por lo bajo...\n")
        }
    } else{
        console.log("[!] Eso no es un número pipa\n")
    }
}

console.log("[+] Has acertado el número")

function esCorrecto(incognita ) {
    if (Number(incognita)) {
        return true
    } else {
        return false
    }
}