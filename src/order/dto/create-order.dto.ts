import {
  IsString,
  IsOptional,
  IsNumber,
  IsDateString,
  Length,
} from 'class-validator';

export class CreateOrderDto {
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

  @IsString()
  @Length(1, 500)
  shippingAddress: string;

  @IsString()
  @Length(1, 50)
  shippingCity: string;

  @IsOptional()
  @IsString()
  @Length(1, 20)
  paymentType?: string;

  @IsNumber()
  customerId: number;

  @IsNumber()
  employeeId: number;
}
