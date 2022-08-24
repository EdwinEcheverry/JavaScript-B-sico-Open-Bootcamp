//Bifurcaciones if, else
let saldo=50;
let efectivo= 20;

if (efectivo<saldo)
    {
        console.log("Puede sacar dinero")
    }

    else
        {
            console.log("No tiene saldo suficiente")
        }

        //ejemplo 2
            if (false)
                {
                    console.log("Es verdadero")
                }
                else
                    {
                        console.log("No es verdadero")
                    }

        //Ejemplo 3 if else + if else

        let nota=1;
        if (nota===5)
            {
                console.log("Excelente")
            }

            else if (nota===4)
                {console.log("Bueno")}
            else if (nota===3)
                {console.log("Regular")}
            else if (nota===2)
                {console.log("Malo")}
            else if (nota===1)
                {console.log("Pésimo")}
            else  
                {console.log("Error")}

        //Ejemplo 4  switch

        switch (nota)
            {
                case 5:console.log("Excelente");
                break;
                case 4:console.log("Bueno");
                break;
                case 3:console.log("Regular");
                break;
                case 2:console.log("Malo");
                break;
                case 1:console.log("Pésimo");
                break;
                default:console.log("error")
                brak
            }
            


