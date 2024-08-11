export class Isfox1723331831481 {
    constructor() {
        this.name = 'Isfox1723331831481'
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "isFox" boolean NOT NULL DEFAULT false`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isFox"`);
    }
}
