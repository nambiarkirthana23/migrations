import { MigrationInterface, QueryRunner } from "typeorm";

export class UserMigration91706780031460 implements MigrationInterface {
    name = 'UserMigration91706780031460'

   
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN "data" integer NOT NULL` );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "hobby"`);

    }

}
