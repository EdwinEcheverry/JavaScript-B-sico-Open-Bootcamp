//Principales operaciones aritmeticas

let a= 3.14;
let b= 5.57;

//Suma
console.log(a+b);

//resta
console.log(a-b);

//multiplicación
console.log(a*b);

//división
console.log(a/b);

//Potencia
console.log(Math.pow(a,b));
console.log(a**b);

//Representación de los números en cadenas de texto
// toString convierte un formato number en string

console.log(typeof a);
let a_s = a.toString();

console.log(typeof a_s)
console.log(a_s)
console.log(a)
 
// Redondear números decimales

let f=3.3;
let g=f*3;

console.log(g);
// .toFixed(x)  para obtner el número con la cantidad de decimales deseado, pero cambia el tipo de dato de number a string

console.log(g.toFixed(3))
console.log(typeof(g.toFixed(4)))

let s= 4.567934783728482;
let p= 456;

console.log(s.toFixed(3))
console.log(p.toFixed(2))

// .toPrecision(x)  . Limita el número de cifras significativas, pero nos devuelve un string

console.log(s.toPrecision(2))
console.log(p.toPrecision(1))
console.log(p.toPrecision(2))
console.log(p.toPrecision(3))
console.log(p.toPrecision(4))

console.log(typeof p.toPrecision(4))








