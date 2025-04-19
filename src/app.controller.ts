import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { seedCustomers } from './customer/entities/customer.seed';
import { seedSuppliers } from './supplier/entities/supplier.seed';
import { seedCategories } from './category/entities/category.seed';
import { seedProducts } from './product/entities/product.seed';
import { seedEmployees } from './employee/entities/employee.seed';
import { seedOrders } from './order/entities/order.seed';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('seed')
  async runSeed(): Promise<{
    message: string;
    count: Record<string, unknown>;
  }> {
    const dataSource = this.appService.getDataSource();
    await dataSource.synchronize(true);
    return {
      message: 'Seed data has been added successfully.',
      count: {
        customers: await seedCustomers(dataSource),
        suppliers: await seedSuppliers(dataSource),
        categories: await seedCategories(dataSource),
        products: await seedProducts(dataSource),
        employees: await seedEmployees(dataSource),
        orders: await seedOrders(dataSource),
      },
    };
  }
}
