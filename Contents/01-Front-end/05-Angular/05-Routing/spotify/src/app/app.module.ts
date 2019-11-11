import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { PlayerComponent } from './player/player.component';
import { DataService } from './service/-data.service';

import {RouterModule, Routes} from '@angular/router';

const routerConfig: Routes = [
  {'path': '', 'component': SongListComponent},
  {'path': 'home', 'component': SongListComponent},
  {'path': 'song/:id', 'component': PlayerComponent},
  {'path': '**', 'component': SongListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
