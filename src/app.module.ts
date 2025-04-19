import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { CustomerModule } from './customer/customer.module';
import { SupplierModule } from './supplier/supplier.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { HealthModule } from './health/health.module'; // Import HealthModule
import { EmployeeModule } from './employee/employee.module'; // Import EmployeeModule
import { OrderModule } from './order/order.module'; // Import OrderModule
import { OrderDetailModule } from './order-detail/order-detail.module'; // Import OrderDetailModule

@Module({
  imports: [
    DatabaseModule,
    CustomerModule,
    SupplierModule,
    CategoryModule,
    ProductModule,
    HealthModule, // Register HealthModule
    EmployeeModule, // Register EmployeeModule
    OrderModule, // Register OrderModule
    OrderDetailModule, // Register OrderDetailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
