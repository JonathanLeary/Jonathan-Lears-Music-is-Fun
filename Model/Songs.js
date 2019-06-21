export default class Song {
  constructor(song) {
    this.title = song.trackName
    //Change 250x250 if you want a larger image
    this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
    this.artist = song.artistName
    this.collection = song.collectionName
    this.price = song.collectionPrice
    this.preview = song.previewUrl
  }


  get Template() {
    return `
    <div class="col-6">
                    <ul>
                        <li class= "card" style="width: 18rem;">
                        <h4>${this.title}</h4>
                        <img src="${this.albumArt}"></img>
                        <h4>Artist:${this.artist}</h4>
                        <h4>Collection:${this.collection}</h4>
                        <h4>Price:${this.price}</h4>
                        <audio controls src="${this.preview}"></audio>
                        </li>
                </div>
    `

  }
}