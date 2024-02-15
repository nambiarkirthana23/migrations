import { MigrationInterface, QueryRunner } from "typeorm";

export class TestMigration1706793052528 implements MigrationInterface {
    name = 'TestMigration1706793052528'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN "age"`);
        // await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "activity"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "activity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL`);
    }

}
