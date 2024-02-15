import { MigrationInterface, QueryRunner } from "typeorm";

export class UserMigration81706779894529 implements MigrationInterface {
    name = 'UserMigration81706779894529'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "activity"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "data"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "data" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "activity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL`);
    }

}
