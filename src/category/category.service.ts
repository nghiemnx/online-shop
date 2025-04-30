import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { isPositiveInteger } from '@/common/helper/digits';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  private successResponse<T>(message: string, data?: T) {
    return {
      statusCode: 200,
      message,
      data,
    };
  }

  async createCategory(categoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(categoryDto);
    await this.categoryRepository.save(category);
    return this.successResponse('Category created successfully', category);
  }

  async getAllCategories() {
    const categories = await this.categoryRepository.find();
    return this.successResponse(
      'Categories retrieved successfully',
      categories,
    );
  }

  async getCategoryById(id: number) {
    if (!isPositiveInteger(id)) {
      throw new BadRequestException(`Invalid category ID`);
    }
    const category = await this.categoryRepository.findOneBy({ id });
    if (!category) {
      throw new NotFoundException(`Category not found`);
    }
    return this.successResponse('Category retrieved successfully', category);
  }

  async updateCategory(id: number, categoryDto: UpdateCategoryDto) {
    if (!isPositiveInteger(id)) {
      throw new BadRequestException(`Invalid customer ID`);
    }
    const result = await this.categoryRepository.update(
      id,
      categoryDto as DeepPartial<Category>,
    );
    if (result.affected === 0) {
      throw new NotFoundException(`Category not found`);
    }
    const updatedCategory = await this.categoryRepository.findOneBy({ id });
    return this.successResponse(
      'Category updated successfully',
      updatedCategory,
    );
  }

  async deleteCategory(id: number) {
    const result = await this.categoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Category not found`);
    }
    return this.successResponse('Category deleted successfully');
  }
}
