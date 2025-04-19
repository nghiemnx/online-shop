import { IsString, Length, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @Length(1, 50) // NVARCHAR(50)
  name: string;

  @IsOptional()
  @IsString()
  @Length(1, 500) // NVARCHAR(500)
  description?: string;
}
