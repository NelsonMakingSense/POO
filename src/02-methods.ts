export class MyDate {
    // las variables deben inicializarse o bien desde la definicion de la variable o bien desde el constructor 
    year: number 
    month: number
    day: number 

    constructor(year: number, month: number, day: number) {
        this.year = year 
        this.month = month
        this.day = day 
    }

    printFormat(): string {
        return `${this.year}/${this.month}/${this.day}`
    }

    add(addDate: number, type: 'day' | 'month' | 'year') {
        if(type === 'day') {
            this.day += addDate
        }    

        if(type === 'month') {
            this.month += addDate
        }    
        if(type === 'year') {
            this.year += addDate
        }    
    }
}

const anotherDate = new MyDate(1993, 7, 5)

console.log(anotherDate.printFormat())

anotherDate.add(15,'day' )

console.log(anotherDate.printFormat())

anotherDate.add(2, 'month')
console.log(anotherDate.printFormat())

// Un ejemplo propio con lo aprendido

class MyEjemplo{
    nombre: string
    edad: string
    ocupacion: string

    constructor(
       nombre: string, edad: string, ocupacion: string
    ) {
        this.nombre = nombre
        this.edad = edad
        this.ocupacion = ocupacion
    }

    printDatos() {
        console.log(`Mi nombre es ${this.nombre}, tengo ${this.edad} años y me dedico a ${this.ocupacion}`)
    }

    addOrRest(dato: string, type: 'nombre' | 'edad' | 'ocupacion') {

        if(type === 'nombre') {
            this.nombre = dato
        }

    }
}

const datosNelson = new MyEjemplo('Nelson Alayón', '43', 'Ux Developer')

datosNelson.printDatos()
