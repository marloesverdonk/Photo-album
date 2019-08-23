import * as React from 'react'

export default function AlbumsList(props) {
  return (<div>
    <br></br>
    <b>There are { props.albums.length } albums available.</b>
    <ul> {props.albums.map(album => 
      <li key={album.id} > { album.title } </li>
      )}
    </ul>
    
  </div>)
}