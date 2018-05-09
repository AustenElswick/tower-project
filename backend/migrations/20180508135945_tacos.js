
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tacos', table => {
    table.increments('id')
    table.float('lat')
    table.float('long')
    table.text('name')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tacos')
}
