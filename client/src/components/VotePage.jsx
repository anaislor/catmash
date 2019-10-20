import React, { useState, useEffect } from 'react'
import CatFace from './CatFace'
import api from '../api'

function VotePage() {
  const [allCats, setAllCats] = useState([])
  const [catsOnVote1, setCatsOnVote1] = useState([])
  const [catsOnVote2, setCatsOnVote2] = useState([])

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
    setCatsOnVote1(randomCats(allCats))
    setCatsOnVote2(randomCats(allCats))
  }, [allCats])

  //ONCLICK
  function handleOnclickCat1(event) {
    setCatsOnVote2(randomCats(allCats))
  }

  function handleOnclickCat2(event) {
    setCatsOnVote1(randomCats(allCats))
  }

  return (
    <div>
      <h1>Cat Mash Vote</h1>
      <pre>{JSON.stringify(allCats)}</pre>
      <pre>{JSON.stringify(catsOnVote1)}</pre>
      <pre>{JSON.stringify(catsOnVote2)}</pre>
      <div onClick={handleOnclickCat1}>
        <CatFace cat={catsOnVote1} />
      </div>
      <div onClick={handleOnclickCat2}>
        <CatFace cat={catsOnVote2} />
      </div>
    </div>
  )
}

export default VotePage
