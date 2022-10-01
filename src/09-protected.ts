export class Animal {
    constructor(
        // public da acceso externo total, private solo da acceso dentro de la clase, ni siquiera las clases que lo hereden lo pueden usar, protected es un acceso privado pero permite heredar a otras clases hijas
        protected name: string
    ) {}

    protected moving() {
        console.log('i am moving')
    }

    greeting() {
        return `Hello, my name is ${this.name}`
    }
    protected doSomethng() {
        console.log('dooo')
    }
}

const firulais = new Animal('Firualis')

console.log(firulais.greeting())


export class Dog extends Animal{}

const pulgoso = new Dog('Pulgoso')

// pulgoso.moving()
console.log(pulgoso.greeting())



export class Cat extends Animal{
    constructor(        
        name: string,       
        public owner: string
    ) {super(name)}

    maullar(times:number):void {
        for (let index = 0; index < times; index++) {
            console.log('miau')
        }
        this.doSomethng()
    }

    moving(): void {
        console.log('move as a cat')
        super.moving()
    }
}

const luna = new Cat('Luna', 'Nelson')

luna.maullar(10)

console.log(luna.greeting())
console.log(luna.owner)

luna.moving()

// No es posible modificar la variable name desde afuera, porque dicha variable es protected
// luna.name = "otro nombre"
