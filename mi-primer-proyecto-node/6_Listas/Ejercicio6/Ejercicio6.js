//Crea un archivo JS que contenga las siguientes líneas

//- Una variable que contenga la lista de la compra (mínimo 5 elementos)

let listaCompra = ["Arroz", "Lentejas", "Jabón", "Detergente"];

//- Modifica la lista de la compra y añádele "Aceite de Girasol"

listaCompra.push("Aceite de girasol")
console.log(listaCompra)

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

listaCompra.pop()
console.log(listaCompra)

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const Peliculas = [{titulo: "número1", director : "Edwin", Date: "2020,02,20"},
                    {titulo: "número2", director: "Alexander", Date: "1987,05,16"},
                    {titulo: "número3", director: "Arturo", Date: "1957,10,27"}]

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const comparar = Peliculas.filter(objeto=> objeto.Date > "2010,01,01")
console.log(comparar)

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const Directores = Peliculas.map(valor => valor.director)
console.log(Directores)


//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const Titulos = Peliculas.map(valor=> valor.titulo)
console.log(Titulos)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const lista =  Titulos.concat(Directores)
console.log(lista)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const listaNueva = [Titulos, Directores];
console.log(listaNueva)