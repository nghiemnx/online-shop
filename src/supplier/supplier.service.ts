/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Supplier } from './entities/supplier.entity';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>,
  ) {}

  private successResponse<T>(message: string, data?: T) {
    return {
      statusCode: 200,
      message,
      data,
    };
  }

  async createSupplier(supplierDto: CreateSupplierDto) {
    const supplier = this.supplierRepository.create(supplierDto);
    await this.supplierRepository.save(supplier);
    return this.successResponse('Supplier created successfully', supplier);
  }

  async getAllSuppliers() {
    const suppliers = await this.supplierRepository.find();
    return this.successResponse('Suppliers retrieved successfully', suppliers);
  }

  async getSupplierById(id: number) {
    if (!Number.isInteger(id) || id <= 0) {
      throw new NotFoundException(`Invalid customer ID`);
    }
    const result = await this.supplierRepository.findOneBy({
      id,
    });
    if (!result) {
      throw new NotFoundException(`Supplier not found`);
    }
    if (!result) {
      throw new NotFoundException(`Supplier not found`);
    }
    return this.successResponse('Supplier retrieved successfully', result);
  }

  async updateSupplier(id: number, supplierDto: UpdateSupplierDto) {
    const result = await this.supplierRepository.update(
      id,
      supplierDto as DeepPartial<Supplier>,
    );
    if (result.affected === 0) {
      throw new NotFoundException(`Supplier not found`);
    }
    const updatedSupplier = await this.supplierRepository.findOneBy({ id });
    return this.successResponse(
      'Supplier updated successfully',
      updatedSupplier,
    );
  }

  async deleteSupplier(id: number) {
    const result = await this.supplierRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Supplier not found`);
    }
    return this.successResponse('Supplier deleted successfully');
  }
}
