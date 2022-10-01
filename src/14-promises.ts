import axios from 'axios'

(async()=>{
    function delay (time: number) {
        const promise = new Promise<boolean>((resolve)=>{
            setTimeout(() => {
                resolve(true)
            }, time);
        })
    }

    function getProducts() {
        const promise = axios.get('https://api.escuelajs.co/api/v1/products')
        return promise
    }

    async function getProductsAsync() {
        const rta = await axios.get('https://api.escuelajs.co/api/v1/products')
        return rta.data
    }

    console.log('---'.repeat(10))
    const rta = await delay(3000)
    console.log(rta)

    console.log('---'.repeat(10))
    const products = await getProducts()
    console.log(products.data)

    const productsV2 = await getProducts()
    console.log(productsV2)
})()