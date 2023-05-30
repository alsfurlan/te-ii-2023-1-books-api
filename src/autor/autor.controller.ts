import { Controller, Delete, Get, Param } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorEntity } from './autor.entity';

@Controller('autores')
export class AutorController {
  constructor(private autorService: AutorService) {}

  @Get()
  findAll(): Promise<AutorEntity[]> {
    return this.autorService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.autorService.findById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autorService.remove(id);
  }
}
