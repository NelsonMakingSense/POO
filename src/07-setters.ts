export class MyDate {     
  
    constructor(
        public year: number = 2030,
        private _month: number = 5,
       
        private _day: number = 12) {}
        private _weather: string = 'sunny'

    printFormat(): string {
        const day = this.addPadding(this._day)
        const month = this.addPadding(this._month)
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
            this._month += addDate
        }    
        if(type === 'year') {
            this.year += addDate
        }    
    } 

    get day() {
        return this._day
    }

    get isLeapYear(): boolean {
        if (this.year % 400 === 0) return true;
        if(this.year % 100 === 0) return false
        return this.year % 4 === 0
    }

    get exampleVarGet() {
        const months = ['january', 'february', 'march', 'april', 'may', 'june', 'jule', 'august', 'september', 'october', 'november', 'december']        
        return months[this._month]
    }

    get month() {
        return this._month
    }

    // un setter es el contrario a un getter, modifica el valor de una variable definida, pero, como tanto getter como setter admiten logica previa
    // podemos condicionar que dato le ingresamos a la variable. El setter modifica, no devuelve nada. El getter no admite parametros, el setter 
    // pide parametros

    set month(newValue: number) {
        if(newValue > 0 && newValue < 13 ) {
            this._month = newValue
        } else {
            throw new Error('number out of range')
        }
    }

    // mi ejemplo de setter

    get weather() {
        return this._weather
    }

    set weather(newWeather: string) {
        const wheatherTypes = ['sunny', 'cloudy', 'rainy', 'foggy', 'snowy', 'stormy', 'windy']
        if(wheatherTypes.includes(newWeather)) {
            this._weather = newWeather
        } else {
            throw new Error(`this is not a valid weather: ${newWeather}`)
        }
    }

}

let year1 = new MyDate()
// console.log(year1.isLeapYear)
// console.log(year1.exampleVarGet)
let year2 = new MyDate(2023, 5, 3)
// console.log(year2.exampleVarGet)
// console.log(year2.isLeapYear)
let year3 = new MyDate(2024, 2, 14)
// console.log(year3.exampleVarGet)
// console.log(year3.isLeapYear)

year3.month = 8 

console.log(year3.month)

// year3.month= 44

console.log(year3.month)

console.log(year3.weather)

year3.weather = 'rainy'

console.log(year3.weather)

year3.weather = "como lluviosito"

