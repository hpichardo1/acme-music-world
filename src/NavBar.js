import React from 'react'

const NavBar = (props) =>{
  const { albums, artists, selectedArtists, selectedAlbums } = props
  
  return (
    <div id='navbar'>
      <a href='http://localhost:3000/'>HOME </a>
      <a onClick={()=> selectedArtists()} >  Artists { `(${Object.entries(artists).length})` }</a>
      <a onClick={()=>selectedAlbums()}>  Albums  { `(${Object.entries(albums).length})` }</a>
    </div>
  )
}

export default NavBar