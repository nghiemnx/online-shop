import {
  IsString,
  IsOptional,
  IsNumber,
  IsDateString,
  Length,
} from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  @IsDateString()
  shippedDate?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  status?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  @Length(1, 500)
  shippingAddress?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  shippingCity?: string;

  @IsOptional()
  @IsString()
  @Length(1, 20)
  paymentType?: string;

  @IsOptional()
  @IsNumber()
  customerId?: number;

  @IsOptional()
  @IsNumber()
  employeeId?: number;
}
