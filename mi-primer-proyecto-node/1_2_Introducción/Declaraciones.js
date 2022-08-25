var variable;
//let variableLet;

//A las constantes se les debe asignar el valor al momento de declar, y además no se puede modificar al ser constantes.

const constante=1;
const palabra= "Hola soy una constante"

var a=1;
console.log(a)

var a=4;
console.log(a)

console.log(palabra)

//Let es la palabra que se emplea para declarar variables, porque var ya no se usa

let b = 3;
console.log(b)

b=5;
console.log(b)

//Si declaramos como VAR, la declaración de la variable se afecta en todo el código, aun cuando este se haya hecho al interior de un ciclo.
var variable="soy una variable tipo VAR"

for(i=0; i<10; i++)
  {
    var variable="REASIGNADA soy una variable tipo VAR"
  }

console.log(variable)

//Si declaramos como LER, la declaración de la variable sólo se afecta en la sección del código donde la declaramos, en este ejemplo reasignamos el valor de varibleLet al interior del ciclo for, pero este cambio no tiene efecto una vez salimos del ciclo.AUNQUE NO SE CONSIDERA UNA BUENA PRÁCTICA DE PROGRAMACIÓN

let variableLet="soy una variable tipo LET"

for(i=0; i<10; i++)
  {
    let variableLet="REASIGNADA soy una variable tipo LET"
  }

console.log(variableLet)

//typeof nos indica el tipo de variable por el que preguntamos.

console.log(typeof variable)




