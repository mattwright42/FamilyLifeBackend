
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { firstName: 'matt', email: 'fjdksla@gjkld'},
        { firstName: 'mary', email: 'fjdksla@gjkld'},
        { firstName: 'josh', email: 'fjdksla@gjkld'}
      ]);
    });
};
