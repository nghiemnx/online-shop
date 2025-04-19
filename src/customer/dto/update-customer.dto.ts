import {
  IsString,
  IsEmail,
  IsOptional,
  Length,
  IsDateString,
} from 'class-validator';

export class UpdateCustomerDto {
  @IsOptional()
  @IsString()
  @Length(1, 50) // NVARCHAR(50)
  firstName?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50) // NVARCHAR(50)
  lastName?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50) // VARCHAR(50)
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  @Length(1, 500) // NVARCHAR(500)
  address?: string;

  @IsOptional()
  @IsEmail()
  @Length(1, 50) // VARCHAR(50)
  email?: string;

  @IsOptional()
  @IsDateString({
    strict: false,
  })
  birthday?: string;
}
