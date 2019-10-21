import React, { useState, useEffect } from 'react'
import api from '../api'

function ScorePage() {
  const [allCats, setAllCats] = useState([])

  //appeler tous les chats de la base de donnée
  useEffect(() => {
    api
      .getAllCats()
      .then(response => {
        console.log(response)
        setAllCats(response)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div id="scorePage">
      <h1>Les plus beaux chats</h1>
      {allCats
        .sort((cat1, cat2) => {
          if (cat1.score > cat2.score) return -1
          return 1
        })
        .map((cat, i) => (
          <div key={i} className="catDetail">
            <div className="catDetailImage">
              <img src={cat.url} alt="cat" />
            </div>
            <p>Nombre de votes: {cat.score}</p>
          </div>
        ))}
    </div>
  )
}

export default ScorePage
