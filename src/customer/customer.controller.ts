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
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  createCustomer(@Body() customerDto: any) {
    return this.customerService.createCustomer(customerDto);
  }

  @Get()
  getAllCustomers() {
    return this.customerService.getAllCustomers();
  }

  @Get(':id')
  getCustomerById(@Param('id') id: number) {
    return this.customerService.getCustomerById(id);
  }

  @Put(':id')
  putCustomer(@Param('id') id: number, @Body() customerDto: any) {
    return this.customerService.updateCustomer(id, customerDto);
  }

  @Patch(':id')
  patchCustomer(@Param('id') id: number, @Body() customerDto: any) {
    return this.customerService.updateCustomer(id, customerDto);
  }

  @Delete(':id')
  deleteCustomer(@Param('id') id: number) {
    return this.customerService.deleteCustomer(id);
  }
}
