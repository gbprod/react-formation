export const GIPHY_URL = 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC';

export default class GifLoader
{
    static loadGif(term)
    {
        return fetch(`${GIPHY_URL}&q=${term}`)
            .then(response => response.json())
            .then(json => json.data[0])
            .catch(error => console.warn(error))
        ;
    }
}

