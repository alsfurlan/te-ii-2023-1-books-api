import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedEntityNacionalidade1685924588147
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO nacionalidades (nacionalidade) VALUES
            ('Brasileiro(a)'), ('Espanhol(a)'), ('Estadunidense'), ('Canadense'), ('Mexicano(a)')
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM nacionalidades WHERE
         nacionalidade = 'Brasileiro(a)' OR 
         nacionalidade = 'Espanhol(a)' OR 
         nacionalidade = 'Mexicano(a)' OR 
         nacionalidade = 'Estadunidense' OR 
         nacionalidade = 'Canadense'
    `,
    );
  }
}
