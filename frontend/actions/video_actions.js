import * as videoUTIL from '../util/video_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';



const receiveVideos = ({ searched_videos }) => ({
    type: RECEIVE_VIDEOS,
    searched_videos
});


export const searchVideos = query => dispatch => {
    return videoUTIL.searchVideos(query).then( payload => dispatch(receiveVideos(payload)) );
}