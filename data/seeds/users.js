
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { firstName: 'rowValue1',
          lastName: 'rowValue1',
          email: 'jfdksl@gjkdsa.com'
      }
          
      ]);
    });
};

