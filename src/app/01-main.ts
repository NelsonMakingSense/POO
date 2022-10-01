import axios from "axios";

import {Product, Character} from './models/product.model'

// let anyVar: any = 12
// let boolVar: boolean = anyVar

// una forma rapida de crear la interface del producto que se recibe de la api es mediante la pagina https://app.quicktype.io/, copiamos un modelo de producto, lo pegamos en dicha pagina, definimos el lenguaje, (typescrip), y activamos la opcion interfaces only

(async()=>{

  // las tres funciones getProducts sirven para lo mismo, sin embargo se recomienda la version 2
   async function getProducts(): Promise<Product[]>  {
     const rta = await axios.get('https://api.escuelajs.co/api/v1/products')
     return rta.data
   }

  //  desestructurando podemos tomar data directamente del llamado a la api lo siguiente es lo mismo de la primera funcion
  // para que el tipado funcione hacia afuera o hacia adentro de la funcion podemos definir el tipo de objeto que recibe axios.get 
  

  async function getProducts2()  {
    const {data} = await axios.get<Product[]> ('https://api.escuelajs.co/api/v1/products')
    return data
  }

  // la mayoria de las librerias soportan el tipado typescript, sin embargo, si alguna libreria no lo soporta, podemos forzar el tipado usando cast 

  async function getProducts3()  {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products')
    const data = rta.data as Product[]
    return data
  }

  //  const products = await getProducts2()
  //  console.log(products.map(item => `${item.id} - ${item.title}`))


  //  mi ejemplo de llamada asincronica

  async function getRickAndMorty() {
    const results = await axios.get ('https://rickandmortyapi.com/api/character')
    // lo siguiente se llama forzar el tipado. usar <> o as es lo mismo
    const characters = results.data.results as Character[]
    // Los resultados tipados como Character ahora nos da la opcion de tener las propiedades de cada item 
    characters.map(item => item.created)

    return characters
  }

const results = await getRickAndMorty()
console.log(results.map(sim =>`${sim.name} - ${sim.origin.name}`))

})()

