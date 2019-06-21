import ItunesService from "./ItunesService";

//Private
const itunesService = new ItunesService()

function drawSongs() {
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  let songsElem = document.querySelector("#songs")
  let template = ''
  let songs = itunesService.Songs
  songs.forEach(song => {
    template += song.Template
  })
  songsElem.innerHTML = template
  remSongs()
}

function remSongs() {
  let remove = []
}



//changes button back to GET MUSIC once songs are loaded
console.log(itunesService.Songs)





//PUBLIC
class ItunesController {
  constructor() {
    itunesService.addSubscriber("songs", drawSongs)
    drawSongs()
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController