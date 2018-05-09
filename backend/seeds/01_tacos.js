
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tacos').del()
    .then(function () {
      // Inserts seed entries
      return knex('tacos').insert([
        {id: 1, lat: 39.748182, long: -104.984723, name: 'Wahoos Fish Tacos'},
        {id: 2, lat: 39.754187, long: -104.990989, name: 'Mexico City Resturant and Lounge'},
        {id: 3, lat: 39.757520, long: -104.986697, name: 'Los Chingones'},
        {id: 4, lat: 39.762204, long: -105.006095, name: 'BorraCho Tacos'},
        {id: 5, lat: 39.738216, long: -104.998542, name: 'Tacos Los Compas'},
        {id: 6, lat: 39.733431, long: -104.987856, name: 'Torchys Tacos'}
      ])
      return knex.raw('ALTER SEQUENCE margs_id_seq RESTART WITH 7;')
    })
}
