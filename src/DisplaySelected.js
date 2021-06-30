import React from 'react'

const DisplaySelected = (props) => {
  const { selected } = props
  console.log(selected)
  return (
      <ul>
        {
          selected.map((artist, idx) => 
          <li key={idx}>
            {artist.name}
            {artist.artist && <ul><li>{artist.artist && artist.artist.name}</li></ul>}
          </li>)
        }
    </ul>
  )
}

export default DisplaySelected