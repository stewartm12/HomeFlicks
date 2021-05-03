import {createSelector} from 'reselect';

export const selectAllVideos = createSelector(
  state => state.entities.genres,
  (genres) => Object.values(genres)
)

export const selectBannerVideo = createSelector(
  state => state.entities.movies,
  (movie) => Object.values(movie)
)