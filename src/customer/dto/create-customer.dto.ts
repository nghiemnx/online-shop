import {
  IsString,
  IsEmail,
  IsOptional,
  Length,
  IsDateString,
  IsDate,
} from 'class-validator';
import { sample } from 'rxjs';

export class CreateCustomerDto {
  @IsString()
  @Length(1, 50) // NVARCHAR(50)
  firstName: string;

  @IsString()
  @Length(1, 50) // NVARCHAR(50)
  lastName: string;

  @IsString()
  @Length(1, 50) // VARCHAR(50)
  phoneNumber: string;

  @IsString()
  @Length(1, 500) // NVARCHAR(500)
  address: string;

  @IsEmail()
  @Length(1, 50) // VARCHAR(50)
  email: string;

  @IsOptional()
  @IsDateString({ strict: false }, { message: 'Invalid date format' })
  birthday?: string;
}
