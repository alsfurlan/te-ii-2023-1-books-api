import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEntityNacionalidade1685924504917
  implements MigrationInterface
{
  name = 'CreateEntityNacionalidade1685924504917';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "nacionalidades" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nacionalidade" character varying NOT NULL, CONSTRAINT "PK_e1324f3e7393cc58ca3238ad2d0" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "nacionalidades"`);
  }
}
