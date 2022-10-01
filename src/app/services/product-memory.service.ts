import { faker, Faker } from '@faker-js/faker'
import { Product } from '../models/product.model'
import { CreateProductDto, updateProductDto } from '../dtos/product.dto'
import { ProductService } from '../models/product-service.model'


export class ProductMemoryService implements ProductService {
    private products: Product[] = []

    getAll() {
        return this.products
    }

     create (data: CreateProductDto): Product {
        const newProduct = {
            ...data,
            id: faker.datatype.number(),           
            category: {
                id: data.categoryId,
                name: faker.commerce.department(), 
                image: faker.image.imageUrl()              
            }       
        }
       return this.add(newProduct)
    }

    add(product:Product) {
        this.products.push(product)
        return product
    }

    update (id:Product['id'], changes: updateProductDto): Product {
        const index = this.products.findIndex(item => item.id === id);
        const prevData = this.products[index]
        this.products[index] = {
            ...prevData,
            ...changes
        }
       return this.products[index]
    }

    findOne(id: Product['id']) {
        return this.products.find(item => item.id === id);
    }
}







