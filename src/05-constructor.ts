export class MyDate { 
    
    // Todo el siguiente codigo puede resumirse, no se necesita declarar y luego asignar, basta con pasarle los parametros al constructor 
    // public year: number    
    // month: number     
    // private day: number 

    // constructor(year: number, month: number, day: number) {
    //     this.year = year 
    //     this.month = month
    //     this.day = day 
    // }
   
    // En este caso TS solamente exige que debemos declarar el ambito de la variable, si es publica o privada o sololectura.
    // tambien podemos asignar valores por defecto
    constructor(
        public year: number = 2030,
        public month: number = 5,
        private day: number = 12) {}

    printFormat(): string {
        const day = this.addPadding(this.day)
        const month = this.addPadding(this.month)
        return `${this.year}/${month}/${day}`
    }
   

    private addPadding(value:number) {
        if(value < 10) {
            return `0${value}`
        }
        return `${value}`
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
   

    getDay() {
        return this.day
    }
    
}

const anotherDate = new MyDate(1993, 7, 5)

console.log(anotherDate.printFormat())

anotherDate.add(15,'day' )

console.log(anotherDate.printFormat())

anotherDate.add(2, 'month')
console.log(anotherDate.printFormat())

console.log(anotherDate.getDay())
