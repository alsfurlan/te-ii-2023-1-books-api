import { Controller, Get, Param } from '@nestjs/common';
import { NacionalidadeService } from './nacionalidade.service';
import { NacionalidadeEntity } from './nacionalidade.entity';
import { AutorEntity } from 'src/autor/autor.entity';

@Controller('nacionalidades')
export class NacionalidadeController {
  constructor(private readonly nacionalidadeService: NacionalidadeService) {}

  @Get()
  getAll(): Promise<NacionalidadeEntity[]> {
    return this.nacionalidadeService.getAll();
  }

  @Get(':id/autores')
  findAutoresByNacionalidade(@Param('id') id: string): Promise<AutorEntity[]> {
    return this.nacionalidadeService.findAutoresByNacionalidadeId(id);
  }
}
