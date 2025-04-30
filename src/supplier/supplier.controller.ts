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
import { SupplierService } from './supplier.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { IsNumber } from 'class-validator';

@Controller('suppliers')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Post()
  createSupplier(@Body() supplierDto: CreateSupplierDto) {
    return this.supplierService.createSupplier(supplierDto);
  }

  @Get()
  getAllSuppliers() {
    return this.supplierService.getAllSuppliers();
  }

  @Get(':id')
  getSupplierById(@Param('id') id: number) {
    return this.supplierService.getSupplierById(id);
  }

  @Put(':id')
  putSupplier(@Param('id') id: number, @Body() supplierDto: UpdateSupplierDto) {
    return this.supplierService.updateSupplier(id, supplierDto);
  }

  @Patch(':id')
  patchSupplier(
    @Param('id') id: number,
    @Body() supplierDto: UpdateSupplierDto,
  ) {
    return this.supplierService.updateSupplier(id, supplierDto);
  }

  @Delete(':id')
  deleteSupplier(@Param('id') id: number) {
    return this.supplierService.deleteSupplier(id);
  }
}
