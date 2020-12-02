import React from "react";
import { Link } from "react-router-dom";

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playingSong: false, selectedSong: "" };
    this.handleSongClick = this.handleSongClick.bind(this);
    this.handleAddSongToPlaylist = this.handleAddSongToPlaylist(this);
  }

    handleSongClick() {
    this.props.togglePlayPause(
      this.props.song.id,
      this.props.song.name,
      this.props.song.photo_url,
      this.props.artist.name
    );
  }

  handleAddSongToPlaylist() {

  }

  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchPlaylists();
  }

//   componentWillUpdate(prevProps) {
//     if (this.props.artistId !== prevProps.artistId) {
//     this.fetchArtist(this.props.artistId)
//     }
//   }


  render() {
    const { songs, artistName, artistBio} = this.props;
    if (!songs) return null;
    return (
      <div className="playlist-show-container">          
          <div className="artist-subheader-show">Verified Artist</div>
        <div className="playlist-show-title">{artistName}</div>
          <div className="artist-show-description">
            {artistBio}
          </div>
        <div className="play-pause-like-delete-container">
          <div className="dropdown">
           <button className="three-dot-options" >
           </button>
           <div className="dropdown-content">
             <div className="dropdown-content-flex">  
             <Link to="/webplayer">
             <div className="delete-playlist-button">Return to Home</div>
             </Link>  
             <div className="delete-playlist-button" onClick={this.handleAddSongToPlaylist}>Add Song to Playlist</div>
             </div>
           </div>
           </div>
        </div>
        <div className="playlist-music-tile-line-item">
        </div>
      </div>
    );
  }
}

export default ArtistShow;