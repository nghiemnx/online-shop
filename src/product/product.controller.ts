import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  createProduct(@Body() productDto: CreateProductDto) {
    return this.productService.createProduct(productDto);
  }

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: number) {
    return this.productService.getProductById(id);
  }

  @Put(':id')
  putProduct(@Param('id') id: number, @Body() productDto: UpdateProductDto) {
    return this.productService.updateProduct(id, productDto);
  }

  @Patch(':id')
  patchProduct(@Param('id') id: number, @Body() productDto: UpdateProductDto) {
    return this.productService.updateProduct(id, productDto);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.productService.deleteProduct(id);
  }
}
