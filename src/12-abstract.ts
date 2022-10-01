// Queremos que el usuario solamente cree instancias de clases hijas (como Dog) y no de la clase padre (Animal) por eso al definir la clase animal se le pone la palabra absctract

import { Animal, Dog, Cat } from "./08-inheritance";


// Esta clase ya no es valida porque pusimos a Animal como clase abstract
// const animal = new Animal('rosco')
// animal.greeting()

// Esta clase ya no se puede crear porque en el archivo 08-inheritance definimos la clase animal como abstract 

// const animal = new Animal('pepe')
// animal.greeting()

// Cat es una clase que hereda de Animal, de la clase Cat se puede crear una instancia, pero de Animal no porque es una clase abstracta 

const otroGato = new Cat('tom', 'nelson')

otroGato.greeting()
otroGato.maullar(3)