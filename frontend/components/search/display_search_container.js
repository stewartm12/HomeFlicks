import { connect } from 'react-redux'
import DisplaySearch from './display_search'


const msp = ({ entities}, ownProps) => {
    
    const videos = Object.values(entities.searchedVideos)
    const query = new URLSearchParams(ownProps.location.search).get('q');

    return {
        videos,
        query,
        mylistShowIds: [],
    }
}

const mdp = dispatch => ({
    search: query => dispatch(searchShows(query))
});

export default connect(msp, mdp)(DisplaySearch);
