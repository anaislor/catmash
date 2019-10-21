import React, { useState, useEffect } from 'react'
import CatFace from './CatFace'
import api from '../api'

function VotePage() {
  const [allCats, setAllCats] = useState([])
  const [catsAlreadyDisplayed, setCatsAlreadyDisplayed] = useState([])
  const [catsOnVote1, setCatsOnVote1] = useState([])
  const [catsOnVote2, setCatsOnVote2] = useState([])
  const [message1, setMessage1] = useState('')
  const [message2, setMessage2] = useState('')

  //Pour afficher les chats de manière aléatoire tout en évitant qu'un chat déjà apparu ne réapparaisse
  function randomCats(array) {
    let randomNumber = Math.floor(Math.random() * array.length)
    let randomCat = array[randomNumber]
    if (allCats.length) {
      if (allCats.length === catsAlreadyDisplayed.length) {
        return (randomCat = {})
      } else if (
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
      .then(response => {
        setCatsOnVote1({ ...catsOnVote1, score: response.score })
        setMessage1('Ce chat a gagné le round précédent')
        setMessage2('')
        if (allCats.length === catsAlreadyDisplayed.length) {
          setMessage1('Ce chat est le plus beau de tous!')
          return
        }
      })
      .catch(err => console.log(err))
  }

  function handleOnclickCat2(event) {
    setCatsOnVote1(randomCats(allCats))
    api
      .updateVote(catsOnVote2._id, catsOnVote2.score + 1)
      .then(response => {
        setCatsOnVote2({ ...catsOnVote2, score: response.score })
        setMessage2('Ce chat a gagné le round précédent')
        setMessage1('')
        if (allCats.length === catsAlreadyDisplayed.length) {
          setMessage2('Ce chat est le plus beau de tous!')
          return
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div id="catVote">
      <h2>Votez pour votre chat préféré</h2>
      <pre>{JSON.stringify(catsOnVote1)}</pre>
      <div onClick={handleOnclickCat1} className="columnCatVote left">
        <CatFace cat={catsOnVote1} />
        <h3>{message1}</h3>
      </div>
      <div onClick={handleOnclickCat2} className="columnCatVote right">
        <CatFace cat={catsOnVote2} />
        <h3>{message2}</h3>
      </div>
    </div>
  )
}

export default VotePage
