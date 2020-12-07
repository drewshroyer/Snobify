import * as PlaylistSongApiUtil from "../util/playlist_song_api_util";
import { receivePlaylist } from "./playlist_actions";
export const CLEAR_PLAYLIST_SONGS = "CLEAR_PLAYLIST_SONGS";
export const RECEIVE_ALL_PLAYLIST_SONGS = "RECEIVE_ALL_PLAYLIST_SONGS";

export const clearPlaylistSongs = () => {
  return {
    type: CLEAR_PLAYLIST_SONGS,
  };
};

export const receiveAllPlaylistSongs = (playlistSongs) => {
   return {
    type: RECEIVE_ALL_PLAYLIST_SONGS,
    playlistSongs,
  };
};

export const fetchPlaylistSongs = () => dispatch => {
    return PlaylistSongApiUtil.fetchPlaylistSongs().then((playlists) =>
      dispatch(receiveAllPlaylistSongs(playlists))
    );
}

export const addSongToPlaylist = (playlistSong) => (dispatch) => {
  return PlaylistSongApiUtil.addSongToPlaylist(playlistSong).then((value) =>
    dispatch(receivePlaylist(value))
  );
};

export const removeSongFromPlaylist = playlistSongId => {
    return dispatch => {
        return PlaylistSongApiUtil.removeSongFromPlaylist(playlistSongId)
            .then(playlist => dispatch(receivePlaylist(playlist)))
    }
}