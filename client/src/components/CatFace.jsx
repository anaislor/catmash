import React from 'react'

function CatFace(props) {
  let cat = props.cat

  return (
    <div>
      Hello
      <pre>{JSON.stringify(cat)}</pre>
    </div>
  )
}

export default CatFace
