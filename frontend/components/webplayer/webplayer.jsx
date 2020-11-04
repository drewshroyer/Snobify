import React from "react";
import { connect } from "react-redux";
import InternalNavbarContainer from "../nav/internal-nav_container";
import PlayBarContainer from "../playbar/play-bar-container";
import WebPlayerBodyContainer from "./webplayer_body_container";
import { logout } from "../../actions/session_actions";

class WebPlayer extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    // this.handleLogout = this.handleLogout.bind(this);
    this.togglePlayPause = this.togglePlayPause.bind(this);
    this.state = {
      playingSong: false,
      selectedSong: "",
      name: "",
      photo: "",
      artist: "",
    };
  }


  togglePlayPause(id, name, photo, artist) {
    const audioEle = document.getElementById(`audio-element--${id}`);
    if (this.state.selectedSong === id) {
      this.setState({ playingSong: !this.state.playingSong });
    } else {
      // this where we set a new song
      this.setState({
        selectedSong: id,
        playingSong: false,
        name: name,
        photo: photo,
        artist: artist,
      });
    }

    if (this.state.playingSong) {
      audioEle.pause();
    } else {
      audioEle.play();
    }
  }

  render() {
    return (
      <div className="web-player-container">
        <InternalNavbarContainer />
        <div className="webplayer-outer-body-container">
          <div className="top-bar-container">
            <button
              onClick={this.props.logout}
              className="webplayer-logout-button"
            >
              Log out
            </button>
          </div>
          <WebPlayerBodyContainer togglePlayPause={this.togglePlayPause} />
        </div>
        <PlayBarContainer
          togglePlayPause={this.togglePlayPause}
          selectedSong={this.state.selectedSong}
          name={this.state.name}
          photo={this.state.photo}
          artist={this.state.artist}
        />
      </div>
    );
  }
}

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mDTP)(WebPlayer);
