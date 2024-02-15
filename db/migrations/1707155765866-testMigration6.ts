import { MigrationInterface, QueryRunner } from "typeorm";

export class TestMigration61707155765866 implements MigrationInterface {
    name = 'TestMigration61707155765866'
    transaction:false;

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "hobby" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "hobby"`);
    }

}
