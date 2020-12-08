//Create parent class Media
class Media {
  constructor(title){
   this._title = title;
    this._isCheckedOut = false;
    this._ratings = []
  }

  get title(){
    return this._title
  }

  get isCheckedOut(){
    return this._isCheckedOut
  }

  get ratings(){
    return this._ratings
  }

  set isCheckedOut(newStatus){
    this._isCheckedOut = newStatus
  }

  getAverageRating(){
    let sum = this._ratings.reduce((a,b) => a + b)
    return sum / this._ratings.length
  }

  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut
  }

  addRating(rating){
    this._ratings.push(rating)
  }
}

//Create sub class Book
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author(){
    return this._author
  }

  get pages(){
    return this._pages
  }
}

//Create sub class Movie
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director(){
    return this._director
  }

  get runTime(){
    return this._runTime
  }
}

//Create sub class CD
class CD extends Media {
    constructor(title, artist) {
      super(title);
      this._artist = artist;
      this._songs = [];
    }
  
    get artist(){
      return this._artist
    }
  
    get songs(){
      return this._songs
    }
  }

  //Create Catalog for all media
  class Catalog {
      constructor(){
          this._medias = []
      }

      get medias() {
          return this._medias
      }

      addMedia(newMedia) {
          this._medias.push(newMedia)
      }
  }

//Create instance of class Book
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())

//Create instance of class Movie
const speed = new Movie('Jan de Bont', 'Speed', 116)

speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())

//Create instance of Catalog class and add media to the newly created instance 
const newCatalog = new Catalog()
newCatalog.addMedia(speed)
newCatalog.addMedia(historyOfEverything)
console.log(newCatalog.medias)