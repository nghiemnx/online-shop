/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { isPositiveInteger } from '@/common/helper/digits';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  private successResponse<T>(message: string, data?: T) {
    return {
      statusCode: 200,
      message,
      data,
    };
  }

  async createEmployee(employeeDto: CreateEmployeeDto) {
    const employee = this.employeeRepository.create(
      employeeDto as DeepPartial<Employee>,
    );
    await this.employeeRepository.save(employee);
    return this.successResponse('Employee created successfully', employee);
  }

  async getAllEmployees() {
    const employees = await this.employeeRepository.find();
    return this.successResponse('Employees retrieved successfully', employees);
  }

  async getEmployeeById(id: number) {
    if (!isPositiveInteger(id)) {
      throw new BadRequestException(`Invalid employee ID`);
    }
    const result = await this.employeeRepository.findOneBy({
      id,
    });
    if (!result) {
      throw new NotFoundException(`Employee not found`);
    }
    return this.successResponse('Employee retrieved successfully', result);
  }

  async updateEmployee(id: number, employeeDto: UpdateEmployeeDto) {
    if (!isPositiveInteger(id)) {
      throw new BadRequestException(`Invalid employee ID`);
    }
    const result = await this.employeeRepository.update(
      id,
      employeeDto as DeepPartial<Employee>,
    );
    if (result.affected === 0) {
      throw new NotFoundException(`Employee not found`);
    }
    const updatedEmployee = await this.employeeRepository.findOneBy({ id });
    return this.successResponse(
      'Employee updated successfully',
      updatedEmployee,
    );
  }

  async deleteEmployee(id: number) {
    const result = await this.employeeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Employee not found`);
    }
    return this.successResponse('Employee deleted successfully');
  }
}
