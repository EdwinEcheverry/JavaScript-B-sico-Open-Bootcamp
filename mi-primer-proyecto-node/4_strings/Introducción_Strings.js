//Strings o cadenas de caracteres
let str_doble ="Hola soy un texto"
let str_simple = 'Hola soy un texto con comillas simples'


console.log(str_doble);
console.log(str_simple);

// si necesitamos usar texto entre comillas, usamos las comillas y el doble ( \\ )

let str_texto ="Este es un texto que requiere \"comillas\""

console.log(str_texto)

// si necesitamos usar texto entre comillas, seria mejor usar las comillas simples para el texto, y las comillas dobles para el texto entre comillas, y viceversa

let str_texto2 ='Este es un texto que requiere "comillas"'
console.log(str_texto2)

let str_texto3 ="Este es un OTRO TEXTO que requiere 'comillas'"
console.log(str_texto3)

//Comillas invertidas `` (llamadas backticks) nos permiten introducir variables dentro de nuestro texto

let nombre = "Edwin Echeverry Sánchez"
let saludo = `Hola ${nombre} sea bienvenido a nuestra empresa`

console.log(saludo)

//Plantilla HTML

let plantilla = `
<HTML><h1>Página web de ${nombre}</h1>
      <p>Esto es un párrafo</p>
</HTML>
`;

console.log(plantilla)

// Introducción de Variables de HTML
let libros = ["El poder del ahora", "El monje que vendió su Ferrari", "Padre rico, padre pobre"]









