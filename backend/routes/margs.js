const express = require('express')
const router = express.Router()
const queries = require('../queries')

router.get('/', (req, res) => {
  queries.getAllMargs()
  .then(margs => {
    res.status(200).json({margs})
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  queries.getOneMarg(id)
  .then(marg => {
    res.status(200).json({marg})
  })
})

router.post('/', (req, res) => {
  const body = req.body
  queries.addMarg(body)
  .then(newMarg => {
    res.status(201).json({newMarg})
  })
})

router.post('/delete', (req, res) => {
  const id = req.params.id
  queries.deleteMarg(id)
  .then(oldMarg => {
    res.status(204).json({oldMarg})
  })
})

router.post('/update', (req, res) => {
  const id = req.params.id
  const body = req.body
  queries.updateMarg(body, id)
  .then(update => {
    res.status(202).json({update})
  })
})

module.exports = router
