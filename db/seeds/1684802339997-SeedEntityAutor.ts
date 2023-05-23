import { MigrationInterface, QueryRunner } from "typeorm"

export class SeedEntityAutor1684802339997 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO autores (nome)
            VALUES ('William Sheaksphere')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM autores WHERE nome = 'William Sheaksphere'
        `);
    }

}
