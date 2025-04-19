/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { isPositiveInteger } from '@/common/helper/digits';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  private successResponse<T>(message: string, data?: T) {
    return {
      statusCode: 200,
      message,
      data,
    };
  }

  async createProduct(productDto: CreateProductDto) {
    const { categoryId, supplierId, ...productData } = productDto;

    // Verify category
    const category = await this.productRepository.manager.findOne('Category', {
      where: { id: categoryId },
    });
    if (!category) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }

    // Verify supplier
    const supplier = await this.productRepository.manager.findOne('Supplier', {
      where: { id: supplierId },
    });
    if (!supplier) {
      throw new NotFoundException(`Supplier with ID ${supplierId} not found`);
    }

    // Create and save product
    const product = this.productRepository.create({
      ...productData,
      category,
      supplier,
    });
    await this.productRepository.save(product);
    return this.successResponse('Product created successfully', product);
  }

  async getAllProducts() {
    const products = await this.productRepository.find();
    return this.successResponse('Products retrieved successfully', products);
  }

  async getProductById(id: number) {
    if (!isPositiveInteger(id)) {
      throw new NotFoundException(`Invalid product ID`);
    }
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product not found`);
    }
    return this.successResponse('Product retrieved successfully', product);
  }

  async updateProduct(id: number, productDto: UpdateProductDto) {
    if (!isPositiveInteger(id)) {
      throw new NotFoundException(`Invalid product ID`);
    }
    const result = await this.productRepository.update(
      id,
      productDto as DeepPartial<Product>,
    );
    if (result.affected === 0) {
      throw new NotFoundException(`Product not found`);
    }
    const updatedProduct = await this.productRepository.findOneBy({ id });
    return this.successResponse('Product updated successfully', updatedProduct);
  }

  async deleteProduct(id: number) {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product not found`);
    }
    return this.successResponse('Product deleted successfully');
  }

  async getProductsByCategoryId(categoryId: number) {
    const products = await this.productRepository.find({
      where: { category: { id: categoryId } },
      relations: ['category', 'supplier'], // Include relations if needed
    });
    return this.successResponse('Products retrieved successfully', products);
  }
}
