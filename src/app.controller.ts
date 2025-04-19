import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { seedCustomers } from './customer/entities/customer.seed';
import { seedSuppliers } from './supplier/entities/supplier.seed';
import { seedCategories } from './category/entities/category.seed';
import { seedProducts } from './product/entities/product.seed';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('seed')
  async runSeed(): Promise<string> {
    const dataSource = this.appService.getDataSource();
    await dataSource.synchronize(true);
    await seedCustomers(dataSource);
    await seedSuppliers(dataSource);
    await seedCategories(dataSource);
    await seedProducts(dataSource);
    return 'Seed data has been added successfully.';
  }
}
