
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'matt', email: 'fjdksla@gjkld'},
        { name: 'mary', email: 'fjdksla@gjkld'},
        { name: 'josh', email: 'fjdksla@gjkld'}
      ]);
    });
};
