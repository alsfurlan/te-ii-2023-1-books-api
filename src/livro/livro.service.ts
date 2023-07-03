import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { LivroEntity } from './livro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LivroDto } from './livro.dto';

@Injectable()
export class LivroService {
  constructor(
    @InjectRepository(LivroEntity)
    private livroRepository: Repository<LivroEntity>,
  ) {}

  findAll(): Promise<LivroEntity[]> {
    return this.livroRepository.find();
  }

  async findById(id: string): Promise<LivroEntity> {
    const findOne = await this.livroRepository.findOne({ where: { id } });
    if (findOne == null) {
      throw new NotFoundException(
        `Livro não encontrado com o identificador ${id}`,
      );
    }
    return findOne;
  }

  async remove(id: string) {
    const findById = await this.findById(id);
    await this.livroRepository.remove(findById);
    return { ...findById, id };
  }

  async create(dto: LivroDto) {
    await this.validate(dto);
    const newLivro = this.livroRepository.create(dto);
    return this.livroRepository.save(newLivro);
  }

  async update(dto: LivroDto) {
    await this.findById(dto.id);
    await this.validate(dto);
    return this.livroRepository.save(dto);
  }

  async validate(dto: LivroDto) {
    if (new Date(dto.dataLancamento).getTime() > new Date().getTime()) {
      throw new BadRequestException(
        'A data de nascimento do livro não pode ser maior que a data atual',
      );
    }

    const livros = await this.livroRepository.find({ where: { titulo: dto.titulo } });
    if(livros.length > 0) {
      throw new BadRequestException('Já existe um livro cadastro com esse nome');
    }
  }
}
