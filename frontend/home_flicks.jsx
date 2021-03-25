import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// import {fetchMovie} from './util'
import {saveMovie, deleteMovie} from './actions/mylist_actions';
import {fetchGenres} from './actions/genre_actions';
import {fetchMovie} from './actions/movie_actions';
import {login, logout} from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.logout = logout;
  window.login = login;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.saveMovie = saveMovie;
  window.deleteMovie = deleteMovie;
  window.fetchGenres = fetchGenres;
  window.fetchMovie = fetchMovie;
  ReactDOM.render(<Root store={store}/>, root);
})