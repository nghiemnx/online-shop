import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { seedCustomers } from './customer/entities/customer.seed';
import { seedSuppliers } from './supplier/entities/supplier.seed';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('seed')
  async runSeed(): Promise<string> {
    const dataSource = this.appService.getDataSource();
    await seedCustomers(dataSource);
    await seedSuppliers(dataSource);
    return 'Seed data has been added successfully.';
  }
}
