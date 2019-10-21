import React from 'react'

function CatFace(props) {
  if (!props.cat) return null
  let cat = props.cat

  return (
    <div className={!cat.url ? 'imageContainer not-active' : 'imageContainer'}>
      <img src={cat.url} alt="" />
    </div>
  )
}

export default CatFace
