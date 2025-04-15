

// función constructora


function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    };
  }

  let persona1 = new Persona("Juan", 30);


  // la sintaxis de clases ECMAS6 ( 2015)

  class Person {
    // función constructora define propiedades del objeto
    constructor(nombre, edad){
       this.nombre = nombre;
       this.edad = edad;
    }

    // métodos de la clase

    saludar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }

    imprimirEdad() {
        console.log(`La edad es ${this.edad} años.`);
    }

  }

  // estudiante: 
// nombre
// edad
// curso

  class Estudiante extends Person {
    constructor (nombre, edad, curso){
        super(nombre, edad)
        this.curso = curso;
    }

    imprimirCurso() {
        console.log(`El estudiante se llama ${this.nombre} y su curso es ${this.curso}`);
    }
  }

  const estudiante1 = new Estudiante("Pedro", 20, "JavaScript");

 estudiante1.imprimirCurso();














//  instancia de la clase Person

//   const objPerson1 = new Person("Juan", 30, "Pérez");

//   console.log(objPerson1.saludar());

//   objPerson1.imprimirEdad()