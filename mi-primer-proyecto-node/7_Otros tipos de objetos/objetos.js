let objeto = {
    id: 4,
    name: "Edwin",
    lastname: "Echeverry",
    isDeveloper: "true",
    Favorite_book: ["Hombre más rico de Babilonia", "El monje que vendió su ferrari"],
    "el día 4": "es correcto"
}



// acceder a propiedades de un objeto
console.log(objeto.Favorite_book)
console.log(objeto["el día 4"])

const propiedad = "isDeveloper"
console.log(objeto[propiedad])

// Replicar el objeto, pero no sólo copiamos los elementos del objeto, sino también la posición de memoria; por lo tanto cualquier cambio que realicemos, en objeto 1, tambien se va a evidenciar en objeto, y viceversa.

const objeto2 = objeto
console.log(objeto2.name)

objeto2.name= "Alexander"
console.log(objeto.name)

// Ordenar listas de objetos en función de una propiedad

listaPeliculas = [
    {titulo: "efecto", año: "1990"},
    {titulo: "carro", año: "1978"},
    {titulo: "cas", año: "1998"},
    {titulo: "bomberos", año: "2008"}
]

console.log(listaPeliculas)

// Método .sort()  para ordenar listas, y muta el valor de la lista original.

listaPeliculas.sort((a,b)=>a.año-b.año)
console.log(listaPeliculas)










