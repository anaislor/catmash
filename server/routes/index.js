const express = require('express')
const router = express.Router()
const CatsModel = require('./../models/Cat')

router.get('/allCats', (req, res, next) => {
  CatsModel.find()
    .then(dbRes => {
      res.send(dbRes)
    })
    .catch(err => console.log(err))
})

router.post('/voteForCat:id', (req, res) => {
  CatsModel.findByIdAndUpdate(req.params.id, { score: req.body.score })
    .then(dbRes => res.send(dbRes))
    .catch(err => console.log(err))
})

module.exports = router
