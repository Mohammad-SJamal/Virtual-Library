// import the Media class:

const Media = require('./Media');

// create your Music class:

class Music extends Media {
    constructor(title, year, genre, artist, length) {
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
    }

    summary() {
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
    }

    static shortestAlbum(music){
        let shortest = Number.POSITIVE_INFINITY;
        let smallestSong = null;

        for (let i = 0; i < music.length; i++){
            if (music[i].length < shortest){
                shortest = music[i].length;
                smallestSong = music[i];
            }
        }
        return smallestSong;
    }
}

// don't change below
module.exports = Music;
