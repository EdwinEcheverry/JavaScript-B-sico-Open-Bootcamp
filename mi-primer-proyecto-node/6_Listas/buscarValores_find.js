let array = ["hola", 2, 5, 90, true];

//Forma antigua y poco eficiente de iterar
for(let i=0; i < array.length; i++){
    console.log(array[i])
}

// Forma ES6 más eficiente y moderna

//SUMA usando forEach
let suma = 0;
const array_num = [1,2,4,6,8,12];

array_num.forEach(valor=> {
    suma+=valor;
    console.log(valor)
})
console.log(suma)

//recorrer un array con forEache    
array.forEach(valor=> {
    console.log(valor)
})

//Buscar un valor en una lista con el método .find()
//Deseo buscar el número 6 en una lista

let variable = array.find(valor=>
    {
        if (valor== "hola") {
            return true
        }
    })
console.log(variable);


// Buscar en un objeto

const listaObjeto = 
[{ nombre: "Edwin", Edad: "36"}, 
 { nombre: "Yolanda", Edad: "60"},
 { nombre: "Arturo", Edad: "70"},
 { nombre: "Gabriel", Edad: "2"}]

 const busqueda = listaObjeto.find(encontrar=>{
    if (encontrar.nombre="Arturo"){
        return true
    }
 })
 console.log(busqueda.Edad)

 //forma 2 de buscar un objeto

 const busqueda2 = listaObjeto.find(encontrar=> encontrar.nombre=="Arturo")
 console.log(busqueda2.Edad)

 const {Edad} = listaObjeto.find(encontrar => encontrar.nombre === "Yolanda")
 console.log(Edad)






