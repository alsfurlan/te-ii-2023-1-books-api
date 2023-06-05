import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { NacionalidadeEntity } from './nacionalidade.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NacionalidadeService {
  constructor(
    @InjectRepository(NacionalidadeEntity)
    private readonly nacionalidadeRepository: Repository<NacionalidadeEntity>,
  ) {}

  getAll(): Promise<NacionalidadeEntity[]> {
    return this.nacionalidadeRepository.find();
  }

  async findById(
    id: string,
    relations: string[] = [],
  ): Promise<NacionalidadeEntity> {
    const nacionalidade = await this.nacionalidadeRepository.findOne({
      relations,
      where: { id },
    });
    if (!nacionalidade) {
      throw new NotFoundException('Nacionalidade não encontrada');
    }
    return nacionalidade;
  }

  async findAutoresByNacionalidadeId(id: string) {
    const nacionalidade = await this.findById(id, ['autores']);
    return nacionalidade.autores;
  }
}
