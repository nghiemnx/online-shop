import { IsString, IsEmail, IsOptional, IsDate, Length } from 'class-validator';

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
  birthday?: Date;
}
