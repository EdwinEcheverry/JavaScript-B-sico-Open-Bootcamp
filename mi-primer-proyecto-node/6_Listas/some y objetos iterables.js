// some()  El método comprueba si al menos uno de los elementos del array, cumple con la condición dada.

let array = [1,2,5,11,3,45,32,80,37, -2]

const resultado = array.some(valor => valor<0)
console.log(resultado)

const existe = array.some(valor=> valor === 80)
console.log(existe)


const listaObjeto = 
[{ nombre: "Edwin", Edad: 36}, 
 { nombre: "Yolanda", Edad: 60},
 { nombre: "Arturo", Edad: 70},
 { nombre: "Gabriel", Edad: 2}]

 const buscar = listaObjeto.some(valor=> valor.Edad ===36)
 console.log(buscar)

 const buscarYolanda = listaObjeto.some(persona => persona.nombre==="Yolanda")
 console.log(buscarYolanda)

 // Obtener una lista a partir de un objeto iterable

 const string = "Edwin Alexander Echeverry Sánchez"

 const lista = Array.from(string)
 console.log(lista)