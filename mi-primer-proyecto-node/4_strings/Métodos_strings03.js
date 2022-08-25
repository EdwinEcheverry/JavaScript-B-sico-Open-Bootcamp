// Métodos de cadenas de texto parte 3

let texto= "LAS CLASES PARTICULARES permiten ajustar el contenido y enfoque a medida según las necesidades del alumno y adaptándolas a su ritmo individual. Por tanto, son ideales para los alumnos que deseen aprender de manera acelerada, tengan un rendimiento inferior en las clases de grupo (por ejemplo, por timidez o déficit de atención) o tengan disponibilidad de horarios reducida. También son ideales para los jóvenes que necesitan un refuerzo del idioma."

console.log(texto.match(/son/g))

// Includes nos devuelve si, si contiente la palabra que buscamos

console.log(texto.includes("para"))

//Saber si un texto empieza por una palabra
console.log(texto.startsWith("LAS CLASES"))


//Saber si un texto termina por una palabra
console.log(texto.endsWith("idioma."))
