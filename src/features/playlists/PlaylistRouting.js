import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { EditPlaylistForm } from './EditPlaylistForm';
import { SinglePlaylistPage } from './SinglePlaylistPage';
import PlaylistContainer from './PlaylistContainer';

import { useSelector, useDispatch } from 'react-redux';

import {
  fetchPlaylists,
  removePlaylist,
  selectPlaylistById,
} from './playlistsSlice';
import Loading from '../../app/Loading';

const PlaylistRouting = () => {
  const dispatch = useDispatch();
  const playlistStatus = useSelector((state) => state.playlists.status);
  useEffect(() => {
    if (playlistStatus === 'idle') {
      dispatch(fetchPlaylists());
    }
  }, [playlistStatus, dispatch]);

  return (
    <div>
      <Switch>
        <Route
          exact
          path='/playlists'
          render={() => (
            <React.Fragment>
              <PlaylistContainer />
            </React.Fragment>
          )}
        />
        <Route exact path='/playlists/:slug' component={SinglePlaylistPage} />
        <Switch>
          <Route path='/playlists/:slug/edit' component={EditPlaylistForm} />
        </Switch>
      </Switch>
    </div>
  );
};

export default PlaylistRouting;
