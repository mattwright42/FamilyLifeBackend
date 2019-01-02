exports.up = function(knex, Promise) {
    return knex.schema.createTable('children', function(tbl) {
        // primary key
        tbl.increments();
    
        // other fields
        tbl
            .string('name', 255)
            .notNullable();

        tbl
            .string('email', 128);
        
        tbl
            .integer('age')

        tbl
            .string('parent_name')
            .unsigned()
            .references('id')
            .inTable('parents') 
            .notNullable();   
    
        
      });
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('children');
};
