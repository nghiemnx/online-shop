import { IsNumber, Min, Max, IsOptional } from 'class-validator';

export class CreateOrderDetailDto {
  @IsNumber()
  productId: number;

  @IsNumber()
  @Min(1) // Quantity > 0
  quantity: number;

  @IsNumber()
  @IsOptional()
  @Min(0.01) // Price > 0
  price: number;

  @IsNumber()
  @IsOptional()
  @Min(0) // Discount BETWEEN 0 AND 90
  @Max(90)
  discount: number;
}
