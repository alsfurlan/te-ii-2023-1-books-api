import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRelationBetweenAutorAndNacionalidade1685925732196
  implements MigrationInterface
{
  name = 'CreateRelationBetweenAutorAndNacionalidade1685925732196';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "autores" ADD "nacionalidade_id" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "autores" ADD CONSTRAINT "nacionalidade_fk" FOREIGN KEY ("nacionalidade_id") REFERENCES "nacionalidades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "autores" DROP CONSTRAINT "nacionalidade_fk"`,
    );
    await queryRunner.query(
      `ALTER TABLE "autores" DROP COLUMN "nacionalidade_id"`,
    );
  }
}
