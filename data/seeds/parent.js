
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parents').del()
    .then(function () {
      // Inserts seed entries
      return knex('parents').insert([
        { name: 'matt', email: 'fjdksla@gjkld'},
        { name: 'mary', email: 'fjdksla@gjkld'},
        { name: 'josh', email: 'fjdksla@gjkld'}
      ]);
    });
};
