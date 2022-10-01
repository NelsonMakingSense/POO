// generic TypeClass

// export class BaseHttpService<TypeClass> {
    // cuando definimos que TypeClass es un array, mas adelante cuando creemos una instancia de una clase, podemos agregar un generic con number, string, etc, y el type especifica que es un array de los que se defina
//      data: TypeClass[] = []

// }

// const service = new BaseHttpService<string>() 
// TS especifica que service.data es un array de string porque en la definicion de clase asi se especifico (L. 4) y al crear la instancia se especifico que es un string (L. 8)
// service.data

// const service1 = new BaseHttpService<number>()

// el mismo ejemplo pero ahora service1.data queda definido como un array de numeros
// service1.data

import axios from "axios"
import { Category } from "../models/category.model"
import { Product } from "../models/product.model"


export class BaseHttpService<TypeClass> {   
    
    constructor(
        private url: string
    ){}
   async getAll(){
        const { data } = await axios.get(('https://api.escuelajs.co/api/v1/products'))
       return data
    }  

}

// const service = new BaseHttpService<string>
// service.getAll()

// const service2 = new BaseHttpService<Category>
// service.getAll()

(async ()=>{
    const url1 = 'https://api.escuelajs.co/api/v1/products'

    const productsService = new BaseHttpService<Product>(url1)
    const rta = await productsService.getAll()
    console.log(rta)

    const url2 = 'https://api.escuelajs.co/api/v1/categories'

    const CategoryService = new BaseHttpService<Category>(url2)
    const rta1 = await CategoryService.getAll()
    console.log(rta1)

})()

