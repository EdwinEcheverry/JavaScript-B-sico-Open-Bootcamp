//contiunue, break
//labels

let unidades=0;
let decenas=0;

// Ejemplo sin etiquetas

bucledecenas:while(true){
    bucleunidades: while(true){

        // notar que se usa la comilla invertida `` con altgr y símbolo de }
        console.log(`El número actual es: ${decenas}${unidades}`)
        unidades++
        if (unidades===10){
            unidades=0
            break bucleunidades
        }
    if (decenas===2){
        break bucledecenas
    }
}
    decenas++
}
console.log("conteo finalizado")

