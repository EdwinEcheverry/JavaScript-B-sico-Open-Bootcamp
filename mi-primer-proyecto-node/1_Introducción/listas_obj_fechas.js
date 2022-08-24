//Listas  ----> Array o arreglo

const lista=[1, "Edwin", true, undefined, null];
console.log(lista)

const lista2 = new Array(1, 'Edwin', true, undefined, null);
console.log(lista2);

const lista3 = new Array(3);
console.log(lista3)
lista3[0]="elemento1";

console.log(lista3);

const lista4=[lista, lista2,lista3];
console.log(lista4);

//Objetos

const movil=
    {
        altura: 10,
        anchura: 12,
        marca: "Edwin",
        iswhite: true,
        contactos: ["yolanda", "sánchez", "Echeverry"],
        dirección:
            {
                carrera: 16,
                calle: 12
            },
        
            //para nombres compuestos, uso ""
            "altura-tarjeta": 25
    }

console.log(movil.marca);
console.log(movil.dirección);
console.log(movil.contactos);
console.log(movil["altura-tarjeta"])

        //Creamos nuevo atributo para el movil

        movil.año=2019;
        console.log(movil.año);
        

        //cambiando una atributo
        movil.marca="Alexander";
        console.log(movil.marca);

//fechas
    //Librerias de apoyo Moment.js
    let ahora= new Date()
    console.log(ahora)

    let fecha_milis =new Date(10); //utilizando los milisegundos
    console.log(fecha_milis)

    let fecha_cadena= new Date("april 25  2020");
    console.log(fecha_cadena)

    //Enero mes 0, febrero mes 1, etc
    let fecha_valores = new Date (2022, 0, 15);
    console.log(fecha_valores)
    
    let dia= ahora.getDate();

    //le sumamos 1 al mes para que el mes inicie en 1, y no en 0
    let mes= ahora.getMonth()+1;
    let año= ahora.getFullYear();
    console.log(dia, mes, año)
    






