import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  songs: object[] = [
    {
    id: 0,
    cover: "cover_01.jpg",
    album :"Greatest Hits (Remastered)",
    artist: "Queen",
    song: "Don't Stop me Now",
    year: "1981",
    numOfSongs: "17",
    length: "3:37",
    playSong: "Don't_Stop_Me_Now.mp3"
  },{
    id: 1,
    cover: "cover_02.jpg",
    album :"Blur: The Best Of",
    artist: "Blur",
    song: "Girls and Boys",
    year: "2000",
    numOfSongs: "18",
    length: "4:19",
    playSong: "Girls_and_Boys.mp3"
  } ,{
    id: 2,
    cover: "cover_03.jpg",
    album :"Joao Gilberto",
    artist: "Joao Gilberto",
    song: "The Girl from Ipanema",
    year: "1964",
    numOfSongs: "14",
    length: "5:25",
    playSong: "The_Girl_from_Ipanema.mp3"
  },{
    id: 3,
    cover: "cover_04.jpg",
    album :"Vinicius Ao Vivo",
    artist: "Vinicius de Moraes",
    song: "Onde Anda Você",
    year: "1974",
    numOfSongs: "10",
    length: "3:02",
    playSong: "Onde_Anda_Você.mp3"
  },{
    id: 4,
    cover: "cover_05.jpg",
    album :"The Bends",
    artist: "Radiohead",
    song: "Creep",
    year: "1993",
    numOfSongs: "12",
    length: "3:32",
    playSong: "Creep.mp3"
  },{
    id: 5,
    cover: "cover_06.jpg",
    album :"Should be Higher",
    artist: "Depeche Mode",
    song: "I Just Can't Get Enough",
    year: "1981",
    numOfSongs: "12",
    length: "3:38",
    playSong: "Just_Can't_Get_Enough.mp3"
  }
  ,{
    id: 6,
    cover: "cover_07.jpg",
    album :"Me Veras Volver",
    artist: "Sodastereo",
    song: "Cuando Pase el Temblor",
    year: "1985",
    numOfSongs: "15",
    length: "3:40",
    playSong: "Cuando_pase_el_temblor.mp3"
  }
  ,{
    id: 7,
    cover: "cover_08.jpg",
    album :"En Blanco y Negro",
    artist: "Bebo y Cigala",
    song: "Lagrimas Negras",
    year: "2003",
    numOfSongs: "10",
    length: "5:31",
    playSong: "Lagrimas_Negras.mp3"
  },{
    id: 8,
    cover: "cover_09.jpg",
    album :"The cure",
    artist: "The Cure",
    song: "Friday I'm in Love",
    year: "1992",
    numOfSongs: "16",
    length: "3:42",
    playSong: "Friday_I'm_In_Love.mp3"
  },{
    id: 9,
    cover: "cover_10.jpg",
    album :"The Beatles",
    artist: "The Beatles",
    song: "I Want to Hold your Hand",
    year: "1964",
    numOfSongs: "11",
    length: "3:42",
    playSong: "I_Want_To_Hold_Your_Hand.mp3"
  }
  ];


  

  songPlaying: object = {};
  getSongPlaying() {
    return this.songPlaying;
  }

  getSongById(id) {

    for (let song of this.songs) {
      if (song['id'] == id) {
        this.songPlaying = song;
      }
    }

    console.log(this.songPlaying)
    return this.songPlaying;
  }


}
