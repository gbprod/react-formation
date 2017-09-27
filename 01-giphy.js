const GIPHY_URL = 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC';

class GifLoader
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

GifLoader.loadGif('cat').then(gif => console.log(gif));



//////////////////////


class GifLoader {
    constructor(api_key) {
        this.api_key = api_key;
        this.giphy_url = "https://api.giphy.com/v1/gifs/search";
    }

    loadGif(term) {
        return fetch(`${this.giphy_url}?api_key=${this.api_key}&q=${term}`)
            .then(response => response.json())
            .then(json => json.data[0])
            .catch(error => console.warn(error))
        ;
    }
}

let loader = new GifLoader('dc6zaTOxFJmzC');
loader.loadGif('cat').then(gif => console.log(gif));
