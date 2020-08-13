import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("teachers", (table) => {
    table.increments("id").primary();
    table.string("whatsapp").notNullable();
    table.string("bio").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("teachers");
}
