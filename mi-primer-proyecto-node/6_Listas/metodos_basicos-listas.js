// como trabajar con listas, o arreglos

let var1 = 45;
let array = [1,"hola",true,4,false,6, var1];
console.log(array)

// Acceder a los valores de un array a través de su posición
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
console.log(array[6])

// cambiar valores, o introducir nuevos valores en un array

//.push()   .unshift()    ---- Mutan el valor de nuestro array
//.push()   Nos permite agregar valores al fina del array

array.push("Edwin", "Alexander");
console.log(array)

//Introducir valores al principio del array  .unshif

array.unshift("Echeverry", "Sánchez");
console.log(array);

// Métodos para eliminar valores en arrays
// .pop()  --- Valores al final
// El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array

console.log(array.pop());
console.log(array);

//.shift()  ---- Valores al principio

console.log(array.shift());
console.log(array);

// .splice()   ----Método para eliminar, modificar o añadir valores a un array

let array2 = [1,2,3,4,5,6];

// Eliminar valores   .splice(posición, valores a eliminar)
array2.splice(2,3);
console.log(array2);

//añadir valores con .splice()
let array3 = [1,2,3,4,5];

// .splice(posición, valores a agregar (debe ser 0), datas a ingresar a partir de la posición escogida en el primer valor)
array3.splice(2,0, "e", "f", "g");
console.log(array3);

//modificar valores

let array4 = ["a", "b", "c", "d"];
array4.splice(2,1,"Edwin");
console.log(array4);





