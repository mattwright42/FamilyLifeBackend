
exports.up = function(knex, Promise) {
    return knex.schema.createTable('parents', function(tbl) {
        // primary key
        tbl.increments();
    
        // other fields
        tbl
            .string('first & last name', 255)
            .notNullable();

        tbl.string('email', 128);
    
        
      });
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('parents');
};
