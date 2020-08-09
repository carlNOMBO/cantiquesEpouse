import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleSongComponent } from './song-list/single-song/single-song.component';
import { SongListComponent } from './song-list/song-list.component';

const routes: Routes = [
  {path: 'Accueil/songslist/view/:id', component: SingleSongComponent},
  {path: 'Accueil/songslist', component: SongListComponent},
  { path: '**', redirectTo: 'Accueil/songslist' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
