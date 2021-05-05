export const searchVideos = query => {
    return $.ajax({
        method: 'GET',
        url: 'api/search',
        data: { query_string: query },
    });
}