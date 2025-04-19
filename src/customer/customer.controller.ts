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
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  createCustomer(@Body() customerDto: CreateCustomerDto) {
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
  putCustomer(@Param('id') id: number, @Body() customerDto: UpdateCustomerDto) {
    return this.customerService.updateCustomer(id, customerDto);
  }

  @Patch(':id')
  patchCustomer(
    @Param('id') id: number,
    @Body() customerDto: UpdateCustomerDto,
  ) {
    return this.customerService.updateCustomer(id, customerDto);
  }

  @Delete(':id')
  deleteCustomer(@Param('id') id: number) {
    return this.customerService.deleteCustomer(id);
  }
}
