// Métodos más avanzados
// .map()   .filter()   .reduce()

const ciudades = ["Cali", "Pereira", "Bucaramanga", "Manizale", "Bogotá", "Armenia"]

ciudades.forEach(busca=>{
    console.log(busca)
})

// Ejemplo, usando el método .map()  obtener cada ciudad con un número al principio
// 1-Cali    2-Perira,   etc

const arrayNuevo = ciudades.map((valor,indice) =>`${indice+1}- ${valor}`)
console.log(arrayNuevo)

const listaObjeto = 
[{ nombre: "Edwin", Edad: "36"}, 
 { nombre: "Yolanda", Edad: "60"},
 { nombre: "Arturo", Edad: "70"},
 { nombre: "Gabriel", Edad: "2"}]

//  const personasMayores = listaObjeto.filter(obj=>{
//     if (obj.Edad>55)
//     {
//         return true
//     }
//     else
//     {
//         return false
//     }
//  })

const personasMayores = listaObjeto.filter(obj=> obj.Edad>30)
 console.log(personasMayores)

 //Lista los elementos diferentes a nombre Edwin
 const OtraLista = listaObjeto.filter(obj=> obj.nombre !== "Edwin")
 console.log(OtraLista)

 const sumar = [1,2,3,4,5,6];

 const resultado = sumar.reduce(function(valorAnterior, valorActual){
    return valorAnterior + valorActual;
  });
  console.log(resultado)

// .reduce()   empleado para sumar
// Valor anterior es el primer valor de la lista, el valor actual es el segundo valor de la lista
// El indice va de 1 en adelante (1,2,3,4, etc)
// El vector, es el vector sobre el que vamos a aplicar el método .reduce()

let numeros = [10,4,5,7,9];

Ejemplo= numeros.reduce((ValorAnterior, ValorActual, Indice, Vector ) => {
    console.log(ValorAnterior)
    console.log(ValorActual)
    console.log(Indice)
    console.log(Vector)
})

adicionar = numeros.reduce((ValorAnterior, ValorActual) => {
   return ValorAnterior + ValorActual;
})
console.log(adicionar);




