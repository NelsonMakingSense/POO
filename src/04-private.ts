export class MyDate { 
    // Acceso publico, se puede leer y editar desde fuera de la clase  
    public year: number    
    month: number
    // Acceso privado, no se puede ni leer ni editar fuera de la clase. Solamente es accesible desde dentro de la clase. 
    private day: number 

    constructor(year: number, month: number, day: number) {
        this.year = year 
        this.month = month
        this.day = day 
    }

    printFormat(): string {
        const day = this.addPadding(this.day)
        const month = this.addPadding(this.month)
        return `${this.year}/${month}/${day}`
    }

    // Podemos tambien crear accesos privados para metodos, el siguiente metodo solo se puede ejecutar desde dentro de la clase 

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

    // como day es una propiedad privada, podriamos darle accesibilidad mediante un metodo de la clase 

    getDay() {
        return this.day
    }

    // entonces para acceder al atributo day se llegaria por medio de un metodo y no directamente al atributo, con eso se previene que pueda ser modificado desde fuera 
}

const anotherDate = new MyDate(1993, 7, 5)

console.log(anotherDate.printFormat())

anotherDate.add(15,'day' )

console.log(anotherDate.printFormat())

anotherDate.add(2, 'month')
console.log(anotherDate.printFormat())

// no se puede acceder desde afuera al atributo day ya que es un atributo privado, no se puede acceder ni modificar 

// console.log(anotherDate.day)

// Como el atributo day es privado se crea un metodo para poderlo ver, pero en este caso queda protegida
console.log(anotherDate.getDay())
