//- Una variable que contenga tu altura en centímetros (entero)
let altura= 170;

//- Una variable que contenga tu altura en metros (número de coma flotante)

let altura_float = 170.45;

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)

let peso_float = 68.55;

//- Una variable que contenga tu altura en metros redondeada hacia arriba

let alturaA= Math.ceil(altura_float);
console.log(alturaA)

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

console.log(Math.round(peso_float))

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let a= 245.55;
let b= 245.56;

let maxValorJS= Number.MAX_VALUE;
console.log(maxValorJS === (maxValorJS +1));

console.log(a===b);