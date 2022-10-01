// ESTO ES UNA REST API UN CRUD 


import axios from "axios";

import { updateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";

export class ProductHttpService implements ProductService {
    private url = 'https://api.escuelajs.co/api/v1/products'

    async getAll(): Promise<Product[]> {
       const { data } = await axios.get(('https://api.escuelajs.co/api/v1/products'))
       return data
    }
    async update(id: Product['id'], changes: updateProductDto) {
        const { data } = await axios.put(`${this.url}/${id}`, changes)
        return data
    }
    async create(dto: CreateProductDto) {
        const { data } = await axios.post(this.url, dto)
        return data
    }
    async findOne(id:  Product['id']) {
        const { data } = await axios.get(`${this.url}/${id}`)
        return data
    }
}
   