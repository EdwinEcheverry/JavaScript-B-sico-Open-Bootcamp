//factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

var conteo=1;
let i=1;

while (i <12){

        if(i<=10){
        conteo=conteo*i;
        i++;
        }

        if(i===11)
        {
        console.log("El número es superior a 10")
        break
        }

    
}
console.log(conteo)