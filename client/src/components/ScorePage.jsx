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
    <div>
      {allCats
        .sort((cat1, cat2) => {
          if (cat1.score > cat2.score) return -1
          return 1
        })
        .map((cat, i) => (
          <div key={i}>
            <img src={cat.url} alt="cat" />
            <p>{cat.score}</p>
          </div>
        ))}
    </div>
  )
}

export default ScorePage
