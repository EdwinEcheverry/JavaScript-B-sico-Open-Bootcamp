//- La fecha de hoy
 
let fechaHoy = new Date()
console.log(fechaHoy)

//- La fecha de tu nacimiento

let fechaNacimiento = new Date(1984, 08, 15)
console.log(fechaNacimiento)

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

var comparar = fechaHoy > fechaNacimiento
console.log(comparar)

//- Una variable que contenga el día de tu nacimiento

var dia = fechaNacimiento.getDate()
console.log(dia)

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

var mes = fechaNacimiento.getMonth()
console.log(mes)


//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)

var año = fechaNacimiento.getFullYear()
console.log(año)