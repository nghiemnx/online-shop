import { IsString, IsEmail, IsOptional, Length } from 'class-validator';

export class UpdateSupplierDto {
  @IsOptional()
  @IsString()
  @Length(1, 100) // NVARCHAR(100)
  name?: string;

  @IsOptional()
  @IsEmail()
  @Length(1, 50) // VARCHAR(50)
  email?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50) // VARCHAR(50)
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  @Length(1, 500) // NVARCHAR(500)
  address?: string;
}
