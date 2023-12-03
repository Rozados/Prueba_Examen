const medio1 = require("prompt-sync")({siginit: true})

const numerodni = medio1("Introduce el número de tu DNI --> ")

const letradni = medio1("Introduce la letra de tu DNI --> ")

let letracorrecta 
letraDNI(numerodni)
comprobarDNI(letradni)

function letraDNI(x) {
    let resto = x%23 
    if (resto == 0) {
        letracorrecta = "T"
    } else if(resto == 1){
        letracorrecta = "R"
    } else if(resto == 2){
        letracorrecta = "W"
    } else if(resto == 3){
        letracorrecta = "A"
    } else if(resto == 4){
        letracorrecta = "G"
    } else if(resto == 5){
        letracorrecta = "M"
    } else if(resto == 6){
        letracorrecta = "Y"
    } else if(resto == 7){
        letracorrecta = "F"
    } else if(resto == 8){
        letracorrecta = "P"
    } else if(resto == 9){
        letracorrecta = "D"
    } else if(resto == 10){
        letracorrecta = "X"
    } else if(resto == 11){
        letracorrecta = "B"
    } else if(resto == 12){
        letracorrecta = "N"
    } else if(resto == 13){
        letracorrecta = "J"
    } else if(resto == 14){
        letracorrecta = "Z"
    } else if(resto == 15){
        letracorrecta = "S"
    } else if(resto == 16){
        letracorrecta = "Q"
    } else if(resto == 17){
        letracorrecta = "V"
    } else if(resto == 18){
        letracorrecta = "H"
    } else if(resto == 19){
        letracorrecta = "L"
    } else if(resto == 20){
        letracorrecta = "C"
    } else if(resto == 21){
        letracorrecta = "K"
    } else if(resto == 22){
        letracorrecta = "E"
    } 
}

function comprobarDNI(x) {
    if (letradni == letracorrecta){
        console.log("Tu DNI es válido")
    } else {
        console.log("Tu DNI es inválido")
    }
}

// numeroconst ejercicio1 = require("prompt-sync")({sigint: true})

// const numero = ejercicio1("[+] Introduce el numero de tu DNI -> ")
// const letra = ejercicio1("[+] Introduce la letra de tu DNI -> ")

// letraDNI(numero)
// comprobarLetra(letra)

// function letraDNI(x) {
//     const letras = 'TRWAGMYFPDXBNJZSQVHLCKE'
//     const resto = (numero%23)
//     return (letras.charAt(resto))
// }

// function comprobarLetra(x) {
//     const letras2 = 'TRWAGMYFPDXBNJZSQVHLCKE'
//     const resto2 = (numero%23)
//     if (letras2.charAt(resto2) == x) {
//         console.log("Tu DNI es válido")
//     } else {
//         console.log("Tu DNI no es válido")
//     }
// }