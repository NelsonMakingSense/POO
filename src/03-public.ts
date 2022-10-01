export class MyDate {
    // las variables y metodos por default son public, esto hace que se puedan acceder y modificar libremente desde fuera de la clase
    // podemos decir que una variable es readonly, pero no se podria modificar tampoco desde dentro de la clase
    public year: number

    // si creamos una variable readonly nadie va a poder modificarla, ni siquera desde la misma clase.
    // readonly month: number
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
