// sets o conjuntos
// Un set esta conformado por valores únicos, no repetidos

let lista = [1,2,3,5,6,4,9,9,9,9,11,10,"Hola", "Hola"]

const MiSet = new Set(lista)
console.log(lista)

//No se repiten valores
console.log(MiSet)

// añadir datos a un set

MiSet.add(99999);
console.log(MiSet)

// Eliminar valores  .set()

MiSet.delete("Hola")
console.log(MiSet)

// Eliminar todos los valores .clear()

// MiSet.clear()
// console.log(MiSet)

// Saber si el set contiene un valor  .has()

console.log(lista.includes(9))
console.log(MiSet.has(11))
console.log(MiSet.has(50))

// conocer el tamaño del set con la propiedad. size

console.log(MiSet.size)

// Iteración en un set

MiSet.forEach(element => {
    console.log(element)    
});

//convertir el set nuevamente en un array, empleando el factor de propagación ...

let NuevoArray = [...MiSet]
console.log(NuevoArray)






