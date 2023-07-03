import { AutorEntity } from 'src/autor/autor.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GeneroEnum } from './genero.enum';

@Entity('livros')
export class LivroEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  titulo: string;

  @Column({ length: 100, nullable: true })
  subtitulo: string;

  @Column({ type: 'date', name: 'data_lancamento', nullable: true })
  dataLancamento: Date;

  @Column({
    type: 'enum',
    enum: GeneroEnum,
  })
  genero: GeneroEnum;

  @ManyToMany(() => AutorEntity, (autor) => autor.livros, { nullable: false, eager: true })
  @JoinTable({name: 'livros_autores'})
  autores: AutorEntity[];
}
