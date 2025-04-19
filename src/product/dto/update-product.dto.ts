import { IsString, IsNumber, IsOptional, Min, Length } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @Length(1, 100)
  name?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;

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
