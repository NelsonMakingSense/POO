import { Cat } from './09-protected'

// Para que una funcion pueda recibir cualquier tipo de parametro, podemos hacer unions o declarar la variable como unknown

// function getValue(value: number | string) {
//     return value
// }

// function getValue(value: unknown) {
//     return value
// }

// con generics ustamos <mitipo> a la funcion y el parametro puede recibir ese tipo (<mitipo>), lo que hace que cuando se invoque acepte cualquier tipo de parametro

function getValue<myType>(value: myType) {
    return value
}

// aca se infiere el tipo

getValue(12).toFixed()
getValue('12').toLowerCase()
getValue([]).forEach

// aca se especifica el tipo

getValue<number>(12).toFixed()
getValue<string>('12').toLowerCase()
getValue<number[]>([1,2,5,2,5]).forEach


const kaiser = new Cat('kaiser', 'pepe')
getValue<Cat>(kaiser)