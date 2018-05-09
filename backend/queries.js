const knex = require('./database-connection')

module.exports = {
  getAllMargs(){
    return knex('margs')
    .select()
  },
  getOneMarg(id){
    return knex('margs')
    .where('id', id)
    .first()
    .returning('*')
  },
  addMarg(body){
    return knex('margs')
    .insert(body)
    .returning('*')
  },
  deleteMarg(id){
    return knex('margs')
    .where('id', id)
    .del()
    .returning('*')
  },
  updateMarg(body, id){
    return knex('margs')
    .where('id', id)
    .update(body)
    .returning('*')
  },
  getAllTacos(){
    return knex('tacos')
    .select()
  },
  getOneTaco(id){
    return knex('tacos')
    .where('id', id)
    .first()
    .returning('*')
  },
  addTaco(body){
    return knex('tacos')
    .insert(body)
    .returning('*')
  },
  deleteTaco(id){
    return knex('tacos')
    .where('id', id)
    .del()
    .returning('*')
  },
  updateTaco(body, id){
    return knex('tacos')
    .where('id', id)
    .update(body)
    .returning('*')
  }
}
