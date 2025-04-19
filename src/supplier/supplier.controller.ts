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

@Controller('suppliers')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Post()
  createSupplier(@Body() supplierDto: any) {
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
  putSupplier(@Param('id') id: number, @Body() supplierDto: any) {
    return this.supplierService.updateSupplier(id, supplierDto);
  }

  @Patch(':id')
  patchSupplier(@Param('id') id: number, @Body() supplierDto: any) {
    return this.supplierService.updateSupplier(id, supplierDto);
  }

  @Delete(':id')
  deleteSupplier(@Param('id') id: number) {
    return this.supplierService.deleteSupplier(id);
  }
}
