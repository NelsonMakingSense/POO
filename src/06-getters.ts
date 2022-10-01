export class MyDate {     
  
    constructor(
        public year: number = 2030,
        public month: number = 5,
        // una buena practica es ponerle _ a las variables privadas
        private _day: number = 12) {}

    printFormat(): string {
        const day = this.addPadding(this._day)
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
            this._day += addDate
        }    

        if(type === 'month') {
            this.month += addDate
        }    
        if(type === 'year') {
            this.year += addDate
        }    
    }
   
    // un getter es una funcion que se invoca como si se llamara a una variable, una funcion get SIEMPRE tiene que devolver algo

    get day() {
        return this._day
    }

    // Con get no se necesita declarar todas las variables en el constructor, podemos crear una funcion que se llame como una variable y a esta funcion
    // le podemos añadir logica, como el siguiente ejemplo que determina con true o false si un año es bisiesto

    get isLeapYear(): boolean {
        if (this.year % 400 === 0) return true;
        if(this.year % 100 === 0) return false
        return this.year % 4 === 0
    }

    get exampleVarGet() {
        const months = ['january', 'february', 'march', 'april', 'may', 'june', 'jule', 'august', 'september', 'october', 'november', 'december']        
        return months[this.month]
    }
}

let year1 = new MyDate()
console.log(year1.isLeapYear)
console.log(year1.exampleVarGet)
let year2 = new MyDate(2023, 5, 3)
console.log(year2.exampleVarGet)
console.log(year2.isLeapYear)
let year3 = new MyDate(2024, 2, 14)
console.log(year3.exampleVarGet)
console.log(year3.isLeapYear)

