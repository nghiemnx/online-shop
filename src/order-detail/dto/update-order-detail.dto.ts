import { IsNumber, IsOptional, Min, Max } from 'class-validator';

export class UpdateOrderDetailDto {
  @IsOptional()
  @IsNumber()
  @Min(1) // Quantity > 0
  quantity?: number;

  @IsOptional()
  @IsNumber()
  @Min(0.01) // Price > 0
  price?: number;

  @IsOptional()
  @IsNumber()
  @Min(0) // Discount BETWEEN 0 AND 90
  @Max(90)
  discount?: number;
}
