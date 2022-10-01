// las clases estaticas se llaman directamente, no es necesario hacer un new y luego llamarla como una propiedad o metodo 
console.log(Math.PI)
console.log(Math.max(2,5,57,2,4,89,4,4))

// esta es la forma habitual de usar clases

class MyMath {
    PI = 3.14
}

const math = new MyMath()
math.PI

// Esta es la manera de hacerla estatica

class MyMathStatic {
    // Para que esta clase sea estatica agregamos la palabra static, y ademas si queremos que la variable no pueda ser modificada desde afuera de la clase, agregamos readonly 
    static readonly PI = 3.14

    // tambien se pueden crear metodos estaticos, unicamente poniendole static 

    static max(...numbers:number[]) {
        return numbers.reduce((max, item) => max >= item ? max: item )
    }
}

console.log(MyMathStatic.PI)

// con readonly no podemos asingar otro valor a la variable, es de solo lectura

// MyMathStatic.PI = 14

console.log(MyMathStatic.max(3,4,5,56,67,3,23,2,43,45))

// Que pasa si en vez de pasar numero por numero, debemos pasar un array? usamos nuevamente el spread operator (...)

const arrayNumbers = [2,3,54,3,54,45,65,76,78,78,789]

console.log(MyMathStatic.max(...arrayNumbers))