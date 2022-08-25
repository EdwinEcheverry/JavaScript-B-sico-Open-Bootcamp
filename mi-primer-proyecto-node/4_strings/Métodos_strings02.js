// Métodos de cadena de texto parte 2
let input = "EcheveRRy"
let db = "echeverry"

//toLowerCase()    toUppercase()
console.log(input.toLowerCase() === db.toLowerCase())

console.log(input.toLowerCase())
console.log(db)

console.log(input.toUpperCase())

//concatenar dos cadenas de caracteres

let nombres= "Edwin Alexander"
let apellidos="Echeverry Sánchez"

// es mejor práctica usar CONCAT en lugar del +
console.log(nombres.concat(" ",apellidos))
console.log(nombres + " ", apellidos)
console.log(`${nombres} ${apellidos}`)

// Eliminar espacios al inicio y al final

let str3= "             Texto con espacios al principio y al final.      "
console.log(str3.trim().length)
console.log(str3.length)
console.log(str3.trimStart().length)
console.log(str3.trimEnd().length)

// Obtener el caracter de un posición especifica

let str4 = "Soy el String 4"
console.log(str4.charAt(7))
console.log(str4[7])

// Obtener la posición de una palabra dentro de una cadena de caracteres

let str5 = "Hola soy Edwin y me gusta programar en Java, Edwin es Ingeniero, Edwin tiene un hijo"
// Nos dice la posición de la primera vez donde aparece la palabra buscada
console.log(str5.indexOf("Edwin"))
console.log(str5[9])

// Nos dice la posición de la primera vez donde aparece la palabra buscada
console.log(str5.lastIndexOf("Edwin"))



