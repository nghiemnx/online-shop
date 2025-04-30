import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { isPositiveInteger } from '@/common/helper/digits';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  private successResponse<T>(message: string, data?: T) {
    return {
      statusCode: 200,
      message,
      data,
    };
  }

  async createCustomer(customerDto: CreateCustomerDto) {
    const customer = this.customerRepository.create({
      ...customerDto,
    } as DeepPartial<Customer>);
    await this.customerRepository.save(customer);
    return this.successResponse('Customer created successfully', customer);
  }

  async getAllCustomers() {
    const customers = await this.customerRepository.find();
    return this.successResponse('Customers retrieved successfully', customers);
  }

  async getCustomerById(id: number) {
    if (!isPositiveInteger(id)) {
      throw new BadRequestException(`Invalid customer ID`);
    }
    const result = await this.customerRepository.findOneBy({
      id,
    });
    if (!result) {
      throw new NotFoundException(`Customer not found`);
    }
    return this.successResponse('Customer retrieved successfully', result);
  }

  async updateCustomer(id: number, customerDto: UpdateCustomerDto) {
    if (!isPositiveInteger(id)) {
      throw new BadRequestException(`Invalid customer ID`);
    }
    const result = await this.customerRepository.update(
      id,
      customerDto as DeepPartial<Customer>,
    );
    if (result.affected === 0) {
      throw new NotFoundException(`Customer not found`);
    }
    const updatedCustomer = await this.customerRepository.findOneBy({ id });
    return this.successResponse(
      'Customer updated successfully',
      updatedCustomer,
    );
  }

  async deleteCustomer(id: number) {
    const result = await this.customerRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Customer not found`);
    }
    return this.successResponse('Customer deleted successfully');
  }
}
