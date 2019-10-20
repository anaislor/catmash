import React, { useState, useEffect } from 'react'
import CatFace from './CatFace'
import api from '../api'

function VotePage() {
  const [allCats, setAllCats] = useState([])
  const [catsAlreadyDisplayed, setCatsAlreadyDisplayed] = useState([])
  const [catsOnVote1, setCatsOnVote1] = useState([])
  const [catsOnVote2, setCatsOnVote2] = useState([])

  //Pour afficher les chats de manière aléatoire tout en évitant qu'un chat déjà apparu ne réapparaisse
  function randomCats(array) {
    let randomNumber = Math.floor(Math.random() * array.length)
    let randomCat = array[randomNumber]
    if (allCats.length) {
      console.log(catsAlreadyDisplayed.includes(randomCat.id))
      if (
        catsAlreadyDisplayed.includes(randomCat) &&
        catsAlreadyDisplayed.length
      ) {
        console.log('already appeared')
        return randomCats(allCats)
      } else return randomCat
    }
  }

  //appeler tous les chats de la base de donnée
  useEffect(() => {
    api
      .getAllCats()
      .then(response => {
        setAllCats(response)
      })
      .catch(err => console.log(err))
  }, [])

  //paramétrer les deux premiers chats affichés pour les votes
  useEffect(() => {
    setCatsOnVote1(randomCats(allCats))
    setCatsOnVote2(randomCats(allCats))
  }, [allCats])

  //sauvegarder les chats déjà apparus
  useEffect(() => {
    setCatsAlreadyDisplayed([...catsAlreadyDisplayed, catsOnVote1, catsOnVote2])
  }, [catsOnVote1, catsOnVote2])

  //ONCLICK: ajouter +1 au score du chat cliqué et faire apparaitre un nouveau chat à coté
  function handleOnclickCat1(event) {
    setCatsOnVote2(randomCats(allCats))
    api
      .updateVote(catsOnVote1._id, catsOnVote1.score + 1)
      .then(response =>
        setCatsOnVote1({ ...catsOnVote1, score: response.score })
      )
      .catch(err => console.log(err))
  }

  function handleOnclickCat2(event) {
    setCatsOnVote1(randomCats(allCats))
    api
      .updateVote(catsOnVote2._id, catsOnVote2.score + 1)
      .then(response =>
        setCatsOnVote2({ ...catsOnVote2, score: response.score })
      )
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Cat Mash Vote</h1>
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
