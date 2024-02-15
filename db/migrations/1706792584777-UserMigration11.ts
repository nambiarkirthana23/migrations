import { MigrationInterface, QueryRunner } from "typeorm";

export class UserMigration111706792584777 implements MigrationInterface {
    name = 'UserMigration111706792584777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "activity"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "data"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "data1"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "data3"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "data5"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "data5" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "data3" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "data1" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "data" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "activity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL`);
    }

}
