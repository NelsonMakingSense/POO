const date = new Date();

date.getHours()
date.getTime()
date.toISOString()

const date2 = new Date(1993, 1, 12);

date2.getHours()
date2.getTime()
date2.toISOString()


console.log(date)

console.log(date2)

// mi propia clase de fecha 


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
}

const oneDate = new MyDate(2012, 3, 14 )

console.log(oneDate)
