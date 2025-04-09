

// arrays o listas en javascript
let listaDeElementos = [1, "jose", true, [1,2,3]]

let listaEstudiantes = ["Ruben", "Javier", "Luis", "Pedro", "Juan"];
//                         0         1        2       3        4

//                        -5        -4       -3      -2       -1  -->> accedemos en sentido contrario

// acceder a un elemento de la lista

listaEstudiantes[0] // Ruben
// console.log(listaEstudiantes)

listaEstudiantes.push("Jose"); // Agregar un elemento al final de la lista

// console.log(listaEstudiantes)

listaEstudiantes.pop() // Eliminar el último elemento de la lista

// console.log(listaEstudiantes)

listaEstudiantes.splice(2, 0, "Maria") // Agregar un elemento en la posición 2 (sin eliminar ninguno)

// console.log(listaEstudiantes)
listaEstudiantes.splice(2, 1, "Maria") // Agregar un elemento en la posición 2 (eliminando el que estaba antes)

// console.log(listaEstudiantes)
listaEstudiantes.splice(2, 1) // Eliminar el elemento en la posición 2

// console.log(listaEstudiantes)

listaEstudiantes.splice(3, 2)
// console.log(listaEstudiantes)


listaEstudiantes.splice(-1, 1, "Valentina") // Agregar un elemento en la última posición (eliminando el que estaba antes)

// console.log(listaEstudiantes)

listaEstudiantes.splice(2, 0, "Maria", "Jose") // Agregar dos elementos en la posición 2 (eliminando el que estaba antes)
// console.log(listaEstudiantes)

listaEstudiantes.splice(0,2,"Jose", "Maria", "Alberto") // Agregar tres elementos en la posición 0 (eliminando los que estaban antes)
// console.log(listaEstudiantes)

// Objetos en javascript

let user = {
   "name": "Ruben",
   "rut": "12345678-9",
   "age": 18,
   "email": "ruben@gmail.com",
   "direccion": {
      "calle": "Los Olmos",
      "numero": 123,
      "comuna": "Las Condes",
      "region": "Metropolitana"
   },
   "numeroDeLaSuerte": [1, 2, 3, 4, 7],
}

let user1 = {
    name: "Valentina",
    rut: "12345678-9",
    age: 18,
    email: "valentina@gmail.com",
    direccion: {
       calle: "Los Olmos",
       numero: 123,
       comuna: "Las Condes",
       region: "Metropolitana"
    },
    numeroDeLaSuerte: [1, 2, 3, 4, 14],
 }
 
console.log(`Los números de suerte son ${user1.numeroDeLaSuerte[4]}`)

let comunaUser = user1.direccion.comuna // Acceder a la comuna del usuario
// user1.direccion["comuna"]  ---> alternativa para acceso a prop de objeto

console.log(comunaUser)