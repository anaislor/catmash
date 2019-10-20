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

module.exports = router
