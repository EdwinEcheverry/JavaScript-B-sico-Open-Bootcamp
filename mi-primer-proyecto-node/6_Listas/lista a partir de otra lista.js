// como obtener una lista a partir de otra lista con .slice();

let lista1 = [1, 2, "Edwin", true, null, 5];

// el método slice() no modifica el valor del array original

console.log(lista1.slice());

let lista2 = lista1.slice(2,5);
console.log(lista2);

let lista3 = lista1.slice(2,-1)
console.log(lista3);