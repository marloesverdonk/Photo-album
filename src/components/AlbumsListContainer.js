import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { addAlbum , setAlbums, getAlbums } from '../actions/addAlbum'



class AlbumsListContainer extends React.Component {

  componentDidMount() {
    this.props.getAlbums()
  }

  render() {
    if (!this.props.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}


export default connect(mapStateToProps, { addAlbum, setAlbums, getAlbums })(AlbumsListContainer)

