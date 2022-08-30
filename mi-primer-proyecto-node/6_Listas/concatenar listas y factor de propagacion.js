// Unir dos listas .concat(), que une las listas, pero no modifica los valores de las listas originales

let lista1 = [2,3,4,"Edwin"];
let lista2 = ["Alexander", 5,6,7];

console.log(lista1.concat(lista2));
let lista3= lista1.concat(lista2);
console.log(lista3);


// NUEVA FORMA DE CONCATENAR, ASÍ DEBE USARSE AHORA
// Unir dos listas con el factor de propagación   ( ...)

console.log(...lista3);

// concatenamos dos listas empleando ... (que es el factor de propagación)
let lista4 = [...lista1, ...lista2]
console.log(lista4)

// ERROR al concatenar con ...  en este caso coloca la lista 1 [ ] y luego las lista2 [], que es dififerente a concatenar los valores 

let lista5 = [lista1, lista2];
console.log(lista5)

