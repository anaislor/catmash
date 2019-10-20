import React, { useState, useEffect } from 'react'
import api from '../api'

function ScorePage() {
  const [allCats, setAllCats] = useState([])

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
      {allCats.map((cat, i) => (
        <div key={i}>
          <img src={cat.url} alt="cat" />
          <p>{cat.score}</p>
        </div>
      ))}
    </div>
  )
}

export default ScorePage
