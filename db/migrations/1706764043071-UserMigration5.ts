import { MigrationInterface, QueryRunner } from "typeorm";

export class UserMigration51706764043071 implements MigrationInterface {
    name = 'UserMigration51706764043071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN "activity" integer NOT NULL` );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "hobby" `);
    }

}
