import { Controller, Get } from '@nestjs/common';
import { NacionalidadeService } from './nacionalidade.service';
import { NacionalidadeEntity } from './nacionalidade.entity';

@Controller('nacionalidades')
export class NacionalidadeController {
  constructor(private readonly nacionalidadeService: NacionalidadeService) {}

  @Get()
  getAll(): Promise<NacionalidadeEntity[]> {
    return this.nacionalidadeService.getAll();
  }
}
