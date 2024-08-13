import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1723592934286 implements MigrationInterface {
    name = 'Default1723592934286'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "counts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "batch" text NOT NULL, "expiresIn" TIMESTAMP WITH TIME ZONE NOT NULL, "locate" text, "amount" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "product_id" uuid, "user_id" uuid, CONSTRAINT "PK_de4eb20e218069b45e921d07d5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "counts" ADD CONSTRAINT "FK_e78dc87e9b664a944f204b375a7" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "counts" ADD CONSTRAINT "FK_1d17f201f6f354c8555c4b8d761" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "counts" DROP CONSTRAINT "FK_1d17f201f6f354c8555c4b8d761"`);
        await queryRunner.query(`ALTER TABLE "counts" DROP CONSTRAINT "FK_e78dc87e9b664a944f204b375a7"`);
        await queryRunner.query(`DROP TABLE "counts"`);
    }

}
