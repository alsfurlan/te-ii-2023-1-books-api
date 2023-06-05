import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GeneroEnum } from './genero.enum';
import { NacionalidadeEntity } from 'src/nacionalidade/nacionalidade.entity';

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
}
