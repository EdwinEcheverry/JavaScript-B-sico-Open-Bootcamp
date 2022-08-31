//- Un nuevo Set con los nombres de tu familia

let NamesFamily = ["Arturo", "Yolanda", "Gabriel", "Edwin"]

let setFamily = new Set(NamesFamily)

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

console.log(NamesFamily)
console.log(setFamily.add("Edwin"))

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

console.log(setFamily.add("JavaScript"))