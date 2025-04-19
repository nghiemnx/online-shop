import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { CustomerModule } from './customer/customer.module';
import { SupplierModule } from './supplier/supplier.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [DatabaseModule, CustomerModule, SupplierModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
