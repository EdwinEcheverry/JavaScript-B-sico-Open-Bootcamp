// Comparar lista empleando el método .evey()

let lista = [ 4, 11, 3, -5, 0, 23, -12, 7];

let resultado = lista.every(valor=> valor>0)
// Resultado false, porque no todos los números son mayores a cero
console.log(resultado)

// comparación de listas

let lista1 = [ 4, 11, 3, -5, 0, 23, -12, 7];
let lista2 = [ 4, 11, 3, -5, 0, 23, -12, 7];

const functionComparar = (array_1, array_2) => { 
    if (array_1.length !== array_2.length) return false 
    const res= array_1.every((valor, i)=> valor === array_2[i])
    return res
    }
    
    console.log(functionComparar(lista1,lista2))








