/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { v4 as uuidv4,  } from 'uuid';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async createCustomer(customerDto: CreateCustomerDto) {
    const customer = this.customerRepository.create({
      ...customerDto,
      customerID: uuidv4().slice(0, 5), // Generate a unique ID with 5 characters
    } as DeepPartial<Customer>);
    await this.customerRepository.save(customer);
    return { message: 'Customer created successfully', customer };
  }

  async getAllCustomers() {
    return await this.customerRepository.find();
  }

  async getCustomerById(id: string) {
    return await this.customerRepository.findOne({ where: { customerID: id } });
  }

  async updateCustomer(id: string, customerDto: UpdateCustomerDto) {
    const result = await this.customerRepository.update(
      id,
      customerDto as DeepPartial<Customer>,
    );
    if (result.affected === 0) {
      return { message: 'Customer not found' };
    }
    return { message: 'Customer updated successfully' };
  }

  async deleteCustomer(id: string) {
    const result = await this.customerRepository.delete(id);
    if (result.affected === 0) {
      return { message: 'Customer not found' };
    }
    return { message: 'Customer deleted successfully' };
  }
}
