import React from 'react'

function CatFace(props) {
  if (!props.cat) return null
  let cat = props.cat

  return (
    <div className="imageContainer">
      <img src={cat.url} alt="cat" />
    </div>
  )
}

export default CatFace
