import { MigrationInterface, QueryRunner } from "typeorm";

export class UserMigration71706779728005 implements MigrationInterface {
    name = 'UserMigration71706779728005'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN "data1" integer NOT NULL` );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "hobby" string NOT NULL`);
    }
}
