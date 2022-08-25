// Operador ValueOf()    -- Para obtener valores númericos a partir de literales


// Nan (Not a number-infinite
let n= Number("adiós");
//Nos indica que n no es un número
console.log(n);

let numerador=2;
let denominador=0;
console.log(numerador/denominador);

//como vonvertir los String a valores númericos con Number, parseInt y parseFloat

let num1="5.45";   // tipo string
let num2=10.30;   // tipo number

console.log(typeof num1)
console.log(typeof num2)

console.log(num1 + num2); //me concatena los números en lugar de sumarlos, ya que uno es tipo string, y el otro es tipo number.

//con Number()   convertimos un string en un number
console.log(Number(num1) + num2);

console.log(parseInt(num1));  //convierte en number entero
console.log(parseFloat(num1)) //convierte en número tipo flotante

//números hexadecimales

let numHex= "0x3a5b"

console.log(parseInt(numHex));

//Cómo obtener los valores máximo y mínino que podemos obtener en JS

