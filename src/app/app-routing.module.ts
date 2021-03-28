import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleSongComponent } from './song-list/single-song/single-song.component';
import { SongListComponent } from './song-list/song-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SongFormComponent } from './song-list/song-form/song-form.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { DiaporamaComponent } from './song-list/diaporama/diaporama.component';

const routes: Routes = [
  //{path: 'Accueil/songslist/view/:id', component: SingleSongComponent},
  //{path: 'Accueil/songslist', component: SongListComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'songs', component: SongListComponent},
  {path: 'songs/new', component: SongFormComponent},
  {path: 'songs/view/:id', component: SingleSongComponent},
  {path: 'songs/menu', component: SidemenuComponent},
  {path: 'songs/diaporama', component: DiaporamaComponent},
  {path: '**', redirectTo: 'songs' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
