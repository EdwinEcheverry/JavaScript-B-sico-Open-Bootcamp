        
//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let objDatos = 
    {
    nombre: "Edwin",
    apellido: "Echeverry",
    edad: "99",
    altura: "110",
    isDeveloper: "true"
    }
        
    //- Una variable que obtenga tu edad a partir del objeto anterior
     
    console.log(objDatos)
    var a= objDatos.nombre
    console.log(a)
       
    //- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

let objAmigos = [
    {name: "Andrés",  edad: "34"},
    {name: "Pepito", edad: "44"},
    {name: "Camilo", edad: "14"},
]

let lista = [objDatos]
console.log(lista)

let lista2= [objAmigos]

const union = lista.concat(lista2)
console.log(union)

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const ordenada = objAmigos.sort((a,b)=> a.edad-b.edad)
console.log(ordenada)