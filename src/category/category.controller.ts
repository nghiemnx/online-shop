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
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ProductService } from '@/product/product.service';

@Controller('categories')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly productService: ProductService, // Inject ProductService
  ) {}

  @Post()
  createCategory(@Body() categoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(categoryDto);
  }

  @Get()
  getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @Get(':id')
  getCategoryById(@Param('id') id: number) {
    return this.categoryService.getCategoryById(id);
  }

  @Put(':id')
  putCategory(@Param('id') id: number, @Body() categoryDto: UpdateCategoryDto) {
    return this.categoryService.updateCategory(id, categoryDto);
  }

  @Patch(':id')
  patchCategory(
    @Param('id') id: number,
    @Body() categoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.updateCategory(id, categoryDto);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number) {
    return this.categoryService.deleteCategory(id);
  }

  @Get(':id/products')
  getProductsByCategoryId(@Param('id') id: number) {
    return this.productService.getProductsByCategoryId(id);
  }
}
