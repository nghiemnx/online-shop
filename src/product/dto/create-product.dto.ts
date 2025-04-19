import { IsString, IsNumber, IsOptional, Min, Length } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(1, 100)
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  discount?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  stock?: number;

  @IsNumber()
  categoryId: number;

  @IsNumber()
  supplierId: number;

  @IsOptional()
  @IsString()
  description?: string;
}
