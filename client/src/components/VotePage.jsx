import React, { useState, useEffect } from 'react'
import CatFace from './CatFace'
import api from '../api'
import { readdirSync } from 'fs'

function VotePage() {
  const [allCats, setAllCats] = useState([])
  const [catsOnVote, setCatsOnVote] = useState([])

  function randomCats(array) {
    let randomNumber = Math.floor(Math.random() * array.length)
    let randomCat = array[randomNumber]
    return randomCat
  }

  useEffect(() => {
    api
      .getAllCats()
      .then(response => {
        console.log(response)
        setAllCats(response)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    setCatsOnVote([randomCats(allCats), randomCats(allCats)])
  }, [allCats])

  return (
    <div>
      <h1>Cat Mash Vote</h1>
      <pre>{JSON.stringify(allCats)}</pre>
      <pre>{JSON.stringify(catsOnVote)}</pre>
      <div></div>
      <div>
        <CatFace cat={catsOnVote} />
      </div>
    </div>
  )
}

export default VotePage
