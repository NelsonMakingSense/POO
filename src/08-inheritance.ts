// Al ponerle abstract a una clase decimos que no podemos crear una instancia directamente de la clase madre, solamente se pueden crear instancias de las clases hijas
// en el archivo 12-abstract.ts se ve como funciona las clases abstract 

export abstract class Animal {
    constructor(
        public name: string
    ) {}

    moving() {
        console.log('i am moving')
    }

    greeting() {
        return `Hello, my name is ${this.name}`
    }
}

// esta clase ya no se puede crear porque la clase Animal es abstract
// const firulais = new Animal('Firualis')

// firulais.moving()

// console.log(firulais.greeting())

// una clase mas especializada que hereda los metodos y variables de la clase madre Animal, la siguiente clase exporta todos los atributos y metodos de la clase animal y no se necesita mas 

export class Dog extends Animal{}

const pulgoso = new Dog('Pulgoso')

pulgoso.moving()
console.log(pulgoso.greeting())

// si heredamos los valores de una clase Madre, esa clase hija puede especializarse agregando nuevos atributos y metodos 

export class Cat extends Animal{
    constructor(
        // la primera variable se toma de la clase padre, por ello no es necesario declarar si es publica o privada, porque ya esta declarado en la clase padre
        // Pero para no tener conflictos debemos decir que esta variable es de la clase padre (con super())
        name: string,
        // Esta segunda variable es una variable personalizada de la clase, se declara normal, recordar que siempre debe especificarse el ambito (publica o privada)
        public owner: string
    ) {super(name)}

    maullar(times:number):void {
        for (let index = 0; index < times; index++) {
            console.log('miau')
        }
    }
}

const luna = new Cat('Luna', 'Nelson')

luna.maullar(10)

console.log(luna.greeting())
console.log(luna.owner)
