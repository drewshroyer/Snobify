import React from "react";
import SongIndexItem from "./song_Index_Item";
import { Link } from "react-router-dom";

class WebPlayerBody extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchPlaylists();
    this.props.fetchUser(this.props.currentUser.id);
  }
  render() {
    const { songs, artists, playlists, currentUser } = this.props;
    if(!songs) return null;
    return (
      <div className="webplayer-body-container">
        <div className="webplayer-top-shortcuts-see-all">
          <div className="shortcuts-keyword-webplayer">Good Morning {currentUser.name !== "Demo User" ? currentUser.name : ""} 
          </div>
          <div className="see-all-playlists-keyword-webplayer">
            <Link to="/playlists/">See All</Link>
          </div>
        </div>
        <ul className="webplayer-music-tile-line-item">
          {songs.map((song) => (
            <SongIndexItem
              song={song}
              artist={artists[song.artist_id]}
              key={song.id}
              togglePlayPause={this.props.togglePlayPause}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default WebPlayerBody;