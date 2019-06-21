import ItunesController from "./app/components/Itunes/ItunesController";


class App {
  constructor() {
    this.controllers = {
      itunesCtrl: new ItunesController()
    }
  }
}

window["app"] = new App()