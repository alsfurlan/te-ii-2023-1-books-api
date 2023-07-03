import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { GeneroEnum } from './genero.enum';
import { Type } from 'class-transformer';
import { AutorDto } from 'src/autor/autor.dto';

export class LivroDto {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  titulo: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  subtitulo: string;

  @IsDateString()
  @IsOptional()
  dataLancamento?: Date | string; 

  @IsEnum(GeneroEnum)
  genero?: GeneroEnum;
  
  @Type(() => AutorDto)
  @ValidateNested()
  autores: AutorDto[];
}
