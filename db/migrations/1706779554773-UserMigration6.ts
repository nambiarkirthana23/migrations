import { MigrationInterface, QueryRunner } from "typeorm";

export class UserMigration61706779554773 implements MigrationInterface {
    name = 'UserMigration61706779554773'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN "activity" integer NOT NULL` );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "hobby" integer NOT NULL`);
    }
}
