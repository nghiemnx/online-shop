import { IsString, IsEmail, Length, IsNotEmpty } from 'class-validator';

export class CreateSupplierDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100) // NVARCHAR(100)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(1, 50) // VARCHAR(50)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50) // VARCHAR(50)
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 500) // NVARCHAR(500)
  address: string;
}
