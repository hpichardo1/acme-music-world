import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios'
import NavBar from './NavBar'
import Hello from './Hello'
import Display from './Display'

class Main extends Component {
  constructor(){
    super()
    this.state = {
      albums: {},
      artists: [],
      selected: []
    }
    this.selectedArtists = this.selectedArtists.bind(this)
    this.selectedAlbums = this.selectedAlbums.bind(this)
  }
  async componentDidMount (){
    try{
      const response = await axios.get('/api/albums')
      const albums = response.data
      const responseArtists = await axios.get('/api/artists')
      const artists = responseArtists.data 

      this.setState( {albums : albums, artists: artists})
    } catch (err){
      console.log(err)
    }
  }
  selectedArtists (){
    this.setState( { selected: this.state.artists } )
  }
  selectedAlbums(){
    this.setState( { selected: this.state.albums} ) 
  }

  render(){
    const { albums, artists, selected } = this.state
    
    
    return (
      <div>
        <NavBar selectedAlbums={this.selectedAlbums} selectedArtists={this.selectedArtists} artists={artists} albums={albums}/>
        { Object.entries(selected).length === 0 ? <Hello /> : <Display selected={selected} /> }
      </div>
    )
  }

}


render(<Main />, document.querySelector('#root'));
