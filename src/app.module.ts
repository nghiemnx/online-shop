import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { CustomerModule } from './customer/customer.module';
import { SupplierModule } from './supplier/supplier.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { HealthModule } from './health/health.module'; // Import HealthModule

@Module({
  imports: [
    DatabaseModule,
    CustomerModule,
    SupplierModule,
    CategoryModule,
    ProductModule,
    HealthModule, // Register HealthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
