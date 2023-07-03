import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GeneroEnum } from './genero.enum';
import { NacionalidadeEntity } from 'src/nacionalidade/nacionalidade.entity';
import { LivroEntity } from 'src/livro/livro.entity';

@Entity({ name: 'autores' })
export class AutorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column({ type: 'date', name: 'data_nascimento', nullable: true })
  dataNascimento: Date;

  @Column({
    type: 'enum',
    enum: GeneroEnum,
    default: GeneroEnum.INDEFINIDO,
    nullable: true,
  })
  genero: GeneroEnum;

  @ManyToOne(
    () => NacionalidadeEntity,
    (nacionalidade) => nacionalidade.autores,
    { eager: true },
  )
  @JoinColumn({
    name: 'nacionalidade_id',
    foreignKeyConstraintName: 'nacionalidade_fk',
    referencedColumnName: 'id',
  })
  nacionalidade: NacionalidadeEntity;

  @ManyToMany(() => LivroEntity, (livro) => livro.autores, { nullable: false })
  livros: LivroEntity[];
}
