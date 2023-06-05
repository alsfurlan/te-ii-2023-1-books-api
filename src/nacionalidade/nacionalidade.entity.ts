import { AutorEntity } from 'src/autor/autor.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nacionalidades')
export class NacionalidadeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nacionalidade: string;

  @OneToMany(() => AutorEntity, (autor) => autor.nacionalidade)
  autores: AutorEntity[];
}
