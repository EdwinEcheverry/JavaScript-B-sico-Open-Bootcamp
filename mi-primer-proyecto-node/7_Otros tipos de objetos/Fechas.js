// Trabajando con fechas

let fecha = new Date()
console.log(fecha)

// Los meses inicializan en 0 (es decir 0 = Enero)
let fecha2 = new Date(2020, 00, 25, 22, 45, 59)
console.log(fecha2)

// Otra forma de inicializar fechas es a través de los milisegundos

let fecha3= new Date("june 07, 1987")
console.log(fecha3) 

let fecha4= new Date("june 07, 1987")
console.log(fecha4) 

// comparar dos fechas
console.log(fecha2>fecha3)

// No se puede comparar igual entre fechas de esta manera, ya que primero se deben convertir a milisegundos empleando .getTime()
console.log(fecha3==fecha4)

// igualdad de fechas con getTime()
console.log(fecha2.getTime===fecha3.getTime)

// obtener el dia, el mes y el año de una fecha

// Obtener el dia .getDate()
console.log(fecha4.getDate())

// Obtener el mes .getMonth()
// Le sumamos 1, porque los meses inician en 0
console.log(fecha4.getMonth()+1)

// Obtener el año .getFullYear
console.log(fecha4.getFullYear())

// Mostrar una fecha en un string .tolocalDatestate
console.log(fecha4.toLocaleDateString())

// Mostrar fecha en formato de US Estados unidos
console.log(fecha4.toLocaleDateString("en-US"))





