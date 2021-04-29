import {createSelector} from 'reselect';

export const selectAllVideos = createSelector(
  state => state.entities.genres,
  (genres) => Object.values(genres)
)
