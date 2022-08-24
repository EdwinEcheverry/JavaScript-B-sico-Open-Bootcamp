//Bucles for

// i= i+1
// i+=1
// i++

for (let i=1; i<10; i=i+2){
    console.log(i)
}

let lista=[1,4,6,2,3,7,89,12];

for (let i=0; i<lista.length; i++){
    console.log(lista[i])
}

//Estructura for of
//Ejecuta la función indicada a cada elemento

for (let valor of lista)
    {
        console.log(valor)
    }

// Estructura forEach
//Ejecuta la función indicada una vez por cada elemento del array

lista.forEach(valor=> console.log(valor*3))

lista.forEach(valor => {
    console.log(valor*3)
})

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element)); 

array1.forEach(element =>{
    console.log(element)
})

// For in
let persona={
    nombre: "Edwin",
    apellido:"Echeverry",
    edad: 36
}

for (let prop in persona){
    //accedo a la propiedad (titulo)
    console.log(prop)
    //accedo a el valor de la propiedad
    console.log(persona[prop])
}




