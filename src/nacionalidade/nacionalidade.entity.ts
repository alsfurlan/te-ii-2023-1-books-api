import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nacionalidades')
export class NacionalidadeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nacionalidade: string;
}
