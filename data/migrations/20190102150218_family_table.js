
exports.up = function(knex, Promise) {
    return knex.schema.createTable('family1', function(tbl) {
        // primary key
        tbl.increments();
    
        // other fields
        tbl
            .string('family1 name', 255)
            .unique()
            .notNullable();

        tbl
            .integer('parent_id')
            .unsigned()
            .references('id')
            .inTable('parents')

        tbl
            .integer('child_id')
            .unsigned()
            .references('id')
            .inTable('children')
    
        
      });
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('family1');
};
