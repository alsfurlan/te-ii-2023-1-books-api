import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'autores'})
export class AutorEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nome: string
}