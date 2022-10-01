// esto es una clase normal, se pueden crear todas las instancias que se quieran

export class MyService{
    constructor(private name: string) {}
    getName() {
        return this.name
    }
}

const myService1 = new MyService('service 1')
console.log(myService1.getName())

const myService2 = new MyService('service 2')
console.log(myService2.getName())

console.log(myService1 === myService2)

// y esta clase es singleton, es decir que solo se puede instanciar una vez

export class MyServiceSingleton {
    // esta variable estatica guarda la primera y unica clase que se puede crear. Si no se ha creado nada aun, su valor es null 
    static existingInstance: MyServiceSingleton | null = null
    // El constructor lo volvemos privado para no poder crear varias instancias de clase. Al ser privado solamente se puede usar desde dentro de la defincion de la clase 
    private  constructor(private name:string) {}
    // un metodo cualquiera
    getNameSingleton(): string {
        return this.name
    }
//  Este metodo evalua la variable existingInstance y si es null, crea una instancia. Si ya tiene asignada una instancia no va a crear mas instancias
    static create(name:string) {
        if(MyServiceSingleton.existingInstance === null) {
            console.log('Este texto deberia imprimirse solo una vez porque esta clase solo deja crear una instancia')
            MyServiceSingleton.existingInstance = new MyServiceSingleton(name)
        } else {console.log('solo se puede hacer una instancia, no insista por favor')}
        return MyServiceSingleton.existingInstance
    }
}

// Ahora, para crear una instancia no usamos new MyServiceSingleton() sino usamos el metodo create de la clase MyServiceSingleton

const singleton1 = MyServiceSingleton.create('hola juan')
console.log(singleton1.getNameSingleton())

// Como ya se creo una instancia de la clase MyServiceSingleton, las siguientes instancias de clase no se crean 

const singleton2 = MyServiceSingleton.create('hola pedro')
console.log(singleton1.getNameSingleton())

const singleton3 = MyServiceSingleton.create('hola luis')
console.log(singleton1.getNameSingleton())

console.log(singleton2 === singleton3)


// mi ejemplo de otro singleton 

export class MiLeecionDeSingleton {

    static thereIsAClassAlready: MiLeecionDeSingleton | null = null
    private constructor (private name:string) {}

    myClassMethod() {
        return this.name
    }

    static create(name:string) {
        if(MiLeecionDeSingleton.thereIsAClassAlready === null) {
            console.log(`solamente se va a crear una instancia con la palabra ${name}`)
            MiLeecionDeSingleton.thereIsAClassAlready = new MiLeecionDeSingleton(name)
        } else{
            console.log('no insita amigo')
        }
        return MiLeecionDeSingleton.thereIsAClassAlready
    }

}

const singletonPractice = MiLeecionDeSingleton.create('Ernesto perez frailejon')
console.log(singletonPractice.myClassMethod())

const singletonPractice2 = MiLeecionDeSingleton.create('bugs bunny')
console.log(singletonPractice2.myClassMethod())





// esto no funciona porque volvi mi clase singleton

// const instanceOfMyClassMethod = new MiLeecionDeSingleton('juan perez troica')

// console.log(instanceOfMyClassMethod.myClassMethod())

// const instanceOfMyClassMethod2 = new MiLeecionDeSingleton('luisito comunica')

// console.log(instanceOfMyClassMethod2.myClassMethod())

// const instanceOfMyClassMethod3 = new MiLeecionDeSingleton('elber gomez torba')

// console.log(instanceOfMyClassMethod3.myClassMethod())

