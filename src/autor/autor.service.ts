import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AutorEntity } from './autor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AutorDto } from './autor-dto';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(AutorEntity)
    private autorRepository: Repository<AutorEntity>,
  ) {}

  findAll(): Promise<AutorEntity[]> {
    return this.autorRepository.find();
  }

  async findById(id: string): Promise<AutorEntity> {
    const findOne = await this.autorRepository.findOne({ where: { id } });
    if (findOne == null) {
      throw new NotFoundException(
        `Autor não encontrado com o identificador ${id}`,
      );
    }
    return findOne;
  }

  async remove(id: string) {
    const findById = await this.findById(id);
    await this.autorRepository.remove(findById);
    return { ...findById, id };
  }

  async create(dto: AutorDto) {
    this.validate(dto);
    const newAutor = this.autorRepository.create(dto);
    return this.autorRepository.save(newAutor);
  }

  async update(dto: AutorDto) {
    await this.findById(dto.id);
    this.validate(dto);
    return this.autorRepository.save(dto);
  }

  validate(dto: AutorDto) {
    if (new Date().getTime() < new Date(dto.dataNascimento).getTime()) {
      throw new BadRequestException(
        'A data de nascimento do autor não pode ser menor que a data atual',
      );
    }
  }
}
