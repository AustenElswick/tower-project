const express = require('express')
const router = express.Router()
const queries = require('../queries')

router.get('/', (req, res) => {
  queries.getAllTacos()
  .then(tacos => {
    res.status(200).json({tacos})
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  queries.getOneTaco(id)
  .then(taco => {
    res.status(200).json({taco})
  })
})

router.post('/', (req, res) => {
  const body = req.body
  queries.addTaco(body)
  .then(newTaco => {
    res.status(201).json({newTaco})
  })
})

router.delete('/', (req, res) => {
  const id = req.body.id
  queries.deleteTaco(id)
  .then(oldTaco => {
    res.status(204).json({oldTaco})
  })
})

router.put('/', (req, res) => {
  const id = req.body.id
  const body = req.body
  queries.updateTaco(body, id)
  .then(update => {
    res.status(202).json({update})
  })
})

module.exports = router
