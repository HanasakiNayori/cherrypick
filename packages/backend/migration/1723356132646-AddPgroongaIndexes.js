export class AddPgroongaIndexes1723356132646 {
    constructor() {
    this.name = 'AddPgroongaIndexes1723356132646'
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS pgroonga;`);
        await queryRunner.query(`CREATE INDEX idx_note_text_cw_user_pgroonga ON "note" USING pgroonga("text", "cw", "userId", "userHost");`);
        await queryRunner.query(`CREATE INDEX idx_user_pgroonga ON "user" USING pgroonga("id", "username", "usernameLower", "host");`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX idx_note_text_cw_user_pgroonga;`);
        await queryRunner.query(`DROP INDEX idx_user_pgroonga;`);
    }
}