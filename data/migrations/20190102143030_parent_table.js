
exports.up = function(knex, Promise) {
    return knex.schema.createTable('parents', function(tbl) {
        // primary key
        tbl.increments();
    
        // other fields
        tbl
            .string('first name', 255)
            .notNullable();
        tbl
            .string('last name', 255)
            .notNullable();

        tbl
            .string('email', 128)
            .unique();

        tbl 
            .boolean('are you a parent (true of false)')
        tbl 
            .boolean('are you a child (true of false)')
    
        
      })
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('parents');
};
