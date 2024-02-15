import { MigrationInterface, QueryRunner } from "typeorm";

export class TestMigration41707152510881 implements MigrationInterface {
    name = 'TestMigration41707152510881'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "data1" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "data2" character varying NOT NULL`);
      
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "place"`);
    
    }

} 

