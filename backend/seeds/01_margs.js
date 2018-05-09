
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('margs').del()
    .then(function () {
      // Inserts seed entries
      return knex('margs').insert([
        {id: 1, lat: 39.751417, long: -105.001589, name: 'Margs Taco Bistro'},
        {id: 2, lat: 39.750196, long: -105.000430, name: 'Rio Grande Resturant'},
        {id: 3, lat: 39.747193, long: -104.999400, name: 'Tamayo'},
        {id: 4, lat: 39.745972, long: -104.980775, name: 'Margs World Taco Bistro'},
        {id: 5, lat: 39.759170, long: -105.010558, name: 'Lola Coastal Mexican'}
      ])
      return knex.raw('ALTER SEQUENCE margs_id_seq RESTART WITH 6;')
    })
}
