export const getGifs = async(category) => {
    const url = new URL('https://api.giphy.com/v1/gifs/search');
    url.searchParams.set('api_key', 'aQkQRHsljHgtni1WgVx7ixc7C3WFyYvl');
    url.searchParams.set('q', category);
    url.searchParams.set('limit', '10');

    const resp = await fetch(url.toString());
    const { data } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
    //console.log(gifs)
}