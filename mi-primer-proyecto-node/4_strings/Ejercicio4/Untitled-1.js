// Una cadena de texto con tu Nombre
// Otra cadena de texto con tu Apellido

let nombre = " Edwin "
let apellido = " Echeverry "

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudiante = ""
let estudianteminus= ""

console.log(`Estudiante ${nombre} ${apellido}`)
console.log(nombre)

estudiante = (`${nombre}   ${apellido}`)
console.log(estudiante)

let estudianteMAYUS = estudiante.toUpperCase()
console.log(estudianteMAYUS)

console.log(estudianteminus= estudiante.toLowerCase())
console.log(estudianteminus)


//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
console.log(estudiante.length)


//- Una variable que contenga la primera letra del Nombre
let letra1= ""
console.log(letra1= nombre.charAt(0))
console.log(letra1)

//- Otra variable que contenga la última letra del Apellido

let letra2= ""
console.log(nombre.length)
console.log(nombre.substring(5))
console.log(nombre[5])

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(estudiante.trim().length)
console.log(estudiante.length)

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log(estudiante.lastIndexOf("Edwin"))
console.log(estudiante.includes("Edwin"))










