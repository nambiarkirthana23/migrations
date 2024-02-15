import { MigrationInterface, QueryRunner } from "typeorm";

export class UserMigration101706792221671 implements MigrationInterface {
    name = 'UserMigration101706792221671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN "data5" integer NOT NULL` );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "hobby"`);

    }
}
