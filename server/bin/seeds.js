// const path = require('path')
// require('dotenv').config({ path: path.join(__dirname, '../.env') })

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const CatsModel = require('./../models/Cat')
const axios = require('axios')

// require('./../configs/database')

//à appeler une seule fois pour créer ma base de données
axios
  .get('https://latelier.co/data/cats.json')
  .then(response => {
    CatsModel.insertMany(response.data.images)
      .then(dbRes => console.log(dbRes))
      .catch(error => console.log(error))
  })
  .catch(err => console.log(err))
