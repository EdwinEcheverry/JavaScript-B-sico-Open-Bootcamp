// Métodos más usados con cadenas de caracteres
// Cómo obtener la longitud de un string

let str = "Este es un String"
console.log(str.length)

// Obtener partes de cadenas de caracteres
// slices() substring() substr()

//slice me permite obtener una sección del string (texto)

//inicia en el caracter 5, y termina en el caracter 12 para el caso de slice y substring
let slice_str = str.slice(5,12)
console.log(slice_str)

let substring_str = str.substring (5,12)
console.log(substring_str)

// el substr() esta deprecated (osea obsoleto)

let substr_str = str.substr (5,12)

//inicia en el caracter 5, y con una longitud de 12 caracteres para este ejemplo
console.log(substr_str)

// Reemplazar parte del contenido de una cadena de texto usando replace, pero este sólo reemplaza la primera instancia (o sea si queremos reemplazar todas las palabras (Edwin), por (Alexander), replace, sólo reemplazara el primer texto que diga (Edwin), y los demás los dejará igual)

let cadena = "Hola mi nombre es Edwin y soy Ingeniero Electrónico"
console.log(cadena.replace("Edwin", "Alexander"))

let texto = "Erase una vez tres cerditos, el cerdito menor, el cerdido mayor, y el cerdito del medio"
console.log(texto.replace("cerdito", "CHANCHITO"))

// si utilizamos la expresión regular /g (global), reemplaza todas las instancias

let texto2 = "Erase una vez tres cerditos, el cerdito menor, el cerdido mayor, y el cerdito del medio"
console.log(texto2.replace(/cerdito/g, "CHANCHITO"))



