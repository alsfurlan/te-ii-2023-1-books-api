import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LivroService } from './livro.service';
import { LivroEntity } from './livro.entity';
import { LivroDto } from './livro.dto';

@Controller('livros')
export class LivroController {
  constructor(private livroService: LivroService) {}

  @Get()
  findAll(): Promise<LivroEntity[]> {
    return this.livroService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.livroService.findById(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.livroService.remove(id);
  }

  @Post()
  create(@Body() dto: LivroDto) {
    return this.livroService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: LivroDto) {
    return this.livroService.update({ ...dto, id });
  }
}
