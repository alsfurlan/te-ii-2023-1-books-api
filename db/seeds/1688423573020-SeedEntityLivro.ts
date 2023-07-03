import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedEntityLivro1688423573020 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO autores (id, nome)
        VALUES ('2901f4b1-fe9d-4455-b074-e8e2a83d865c', 'William Sheaksphere');
    `);
    await queryRunner.query(`
        INSERT INTO livros (id, titulo, data_lancamento, genero)
        VALUES ('09538e8b-4783-4554-8416-07d6da5a0e00', 'Romeu e Julieta', '01-01-2000', 'ROMANCE');
    `);

    await queryRunner.query(`
        INSERT INTO livros_autores
        VALUES ('09538e8b-4783-4554-8416-07d6da5a0e00', '2901f4b1-fe9d-4455-b074-e8e2a83d865c');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
