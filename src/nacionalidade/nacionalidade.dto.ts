import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class NacionalidadeDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsOptional()
  @IsString()
  nacionalidade: string;
}
