import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService()

productService.create({
    title: 'producto 1',
    categoryId: 12,
    price: 100,
    description: "a great product",
    images: []
})

const products = productService.getAll()
const productId = products[0].id

productService.update(productId, {
    title: 'Otro nombre'
})

const rta = productService.findOne(productId)
console.log(rta)