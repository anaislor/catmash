import React from 'react'

function CatFace(props) {
  if (!props.cat) return null
  let cat = props.cat

  return (
    <div>
      <img src={cat.url} alt="cat" />
    </div>
  )
}

export default CatFace
