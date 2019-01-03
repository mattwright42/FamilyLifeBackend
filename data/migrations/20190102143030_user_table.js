
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl) {
        // primary key
        tbl.increments();
    
        // other fields
        tbl 
            .string('username', 128)
            .notNullable()
            .unique();

        tbl
            .string('password', 128)
            .notNullable();    

        tbl
            .string('firstName', 255)
            .notNullable();
        tbl
            .string('lastName', 255)
            .notNullable();

        tbl
            .string('email', 128)
            .unique()
            .notNullable();

        tbl 
            .boolean('parent')
            .default(true)
            .notNullable();
        tbl 
            .boolean('child')
            .default(false)
            .notNullable();

        tbl 
            .integer('familyId')
            .notNullable();
    
        
      })
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
