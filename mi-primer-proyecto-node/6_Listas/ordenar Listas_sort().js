// .sort()  métodos para ordenar listas

let array = [2, 4, 19, 1 , 11, 5, 7]

// array.sort([compareFunction])
// arr.sort(a,b)  compara los valors a y b si (a-b) es negativo, se ubica a en primer lugar, y b en segundo lugar, si (a-b) es igual a cero, se dejan en la misma posición, si (a-b) es positivo, queire decir que a es mayor por lo tanto se ubica b en primer ligar y a en segundo lugar.

// si queremos ordenar en forma descendente, simplemente comparamos (b-a)

//Orden ascendente
array.sort((a,b)=> a-b)
console.log(array)

// Orden descendente
array.sort((a,b)=> b-a)
console.log(array)

/////////////  EN ARRAY de Objetos  ////////////////

const listaObjeto = 
[{ nombre: "Edwin", Edad: "36"}, 
 { nombre: "Yolanda", Edad: "60"},
 { nombre: "Arturo", Edad: "70"},
 { nombre: "Gabriel", Edad: "2"}]

 //Ordenar la lista de objetos de acuerdo a la edad, de menor a mayor

listaObjeto.sort((a,b)=> a.Edad-b.Edad)
console.log(listaObjeto)



