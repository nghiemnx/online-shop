import {
  IsString,
  IsOptional,
  IsNumber,
  IsDateString,
  Length,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateOrderDetailDto } from '@/order-detail/dto/create-order-detail.dto';

export enum OrderStatus {
  WAITING = 'WAITING',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}
export class CreateOrderDto {
  @IsOptional()
  @IsDateString({ strict: false }, { message: 'Invalid date format' })
  shippedDate?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  status?: OrderStatus;

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

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderDetailDto)
  orderDetails?: CreateOrderDetailDto[];
}
