
// objeto // método
//console.log("Hola Mundo") // console es un objeto y log es un método de ese objeto

// console.log(Math.random())


let person1 = {
    name: "Alberto",
    lastname: "Gonzalez",
    age: 23,
    printInfo: function() {
        return  `El nombre es ${this.name} ${this.lastname} y su edad es ${this.age} años`
    }
}

let person2 = {
    name: "Diana",
    lastname: "Pérez",
    age: 25,
    printInfo: function() {
        return  `El nombre es ${this.name} ${this.lastname} y su edad es ${this.age} años`
    }
}

function Person(name, lastname, age) {
    this.name = name
    this.lastname = lastname
    this.age = age
    this.printInfo = function() {
        return  `El nombre es ${this.name} ${this.lastname} y su edad es ${this.age} años`
    }
}


let person3 = new Person("Alberto", "Martínez", 30) // instancia de un objeto



console.log(person1.printInfo())
console.log(person2.printInfo())
console.log(person3.printInfo())

