import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/-data.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent {

  songs: object[] = this._data.songs;
  songPlaying: object = {};

  constructor(
    public _path: ActivatedRoute,
    public _data: DataService
  ) { 

    
    this.songPlaying = this._data.getSongPlaying();


  }


}
