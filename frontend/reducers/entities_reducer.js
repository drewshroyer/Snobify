import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import playlistsReducer from "./playlists.reducer";
import songsReducer from "./songs_reducer";
import artistsReducer from "./artists_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  playlists: playlistsReducer,
  artists: artistsReducer,
});

export default entitiesReducer;