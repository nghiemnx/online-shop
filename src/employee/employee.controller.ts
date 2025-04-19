/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
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
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  createEmployee(@Body() employeeDto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(employeeDto);
  }

  @Get()
  getAllEmployees() {
    return this.employeeService.getAllEmployees();
  }

  @Get(':id')
  getEmployeeById(@Param('id') id: number) {
    return this.employeeService.getEmployeeById(id);
  }

  @Put(':id')
  putEmployee(@Param('id') id: number, @Body() employeeDto: UpdateEmployeeDto) {
    return this.employeeService.updateEmployee(id, employeeDto);
  }

  @Patch(':id')
  patchEmployee(
    @Param('id') id: number,
    @Body() employeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.updateEmployee(id, employeeDto);
  }

  @Delete(':id')
  deleteEmployee(@Param('id') id: number) {
    return this.employeeService.deleteEmployee(id);
  }
}
