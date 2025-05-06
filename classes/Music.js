// import the Media class:

const Media = require('./Media');

// create your Music class:

class Music extends Media {
    constructor(title, year, genre, artist, length) {
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
    }

    static shortestAlbum(music){
        let shortest = Number.POSITIVE_INFINITY;
        let smallestAlbum = null;
        
        for (let i = 0; i < music.length; i++){
            if (music[i].length < shortest){
                shortest = music[i].length;
                smallestAlbum = music[i];
            }
        }
        return smallestAlbum;
    }
}

// don't change below
module.exports = Music;
