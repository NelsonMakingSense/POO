import { ProductHttpService } from "./services/product-http.service";

(async () => {

    try {
        const productService = new ProductHttpService()
        console.log('---'.repeat(10))
        console.log('get All: obtener productos de la base de datos')
        const products = await productService.getAll()
        console.log(products.length)
        console.log(products.map(item => item.price))
    
        console.log('---'.repeat(10))
        console.log('update: actualizar algun producto de la base de datos, en este caso el producto [0]')
    
        const productId = products[0].id
        await productService.update(productId, {
            price:333,
            title: 'A great new title',
            description: 'A little change because it´s a great product'
        })
    
        console.log('---'.repeat(10))
        console.log('find one: Aqui se busca el producto que se modifico el producto [0]')
    
        const product = await productService.findOne(productId)
        console.log(product)

        console.log('---'.repeat(10))
        console.log('find one: voy a buscar algun producto aleatorio y mostrarlo en pantalla [22]')

        const productRandom = await productService.findOne(products[22].id)
        console.log(productRandom)


    } catch(error) {
        console.error(error)
    }
   
})()

