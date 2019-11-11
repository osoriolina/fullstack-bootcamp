import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/-data.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  id: number;
  songs: object[];
  songPlaying: object; 

  constructor(
    public _path: ActivatedRoute,
    public _data: DataService
    ) {
      this.id = this._path.snapshot.params.id; 
      this.songPlaying = this._data.getSongById(this.id);
      this.songs = this._data.songs;
    }
}
