exports.up = function(knex, Promise) {
  return knex.schema.createTable('chores', function(tbl) {
    tbl.increments();

    tbl.string('chore name', 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('chores');
};
