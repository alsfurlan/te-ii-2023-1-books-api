import { Injectable } from '@nestjs/common';
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
}
