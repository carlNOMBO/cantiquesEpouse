import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SongListComponent } from './song-list/song-list.component';
import { SingleSongComponent } from './song-list/single-song/single-song.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SongFormComponent } from './song-list/song-form/song-form.component';
import { SongsService } from './services/songs.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
// import { from } from 'rxjs';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: 'auth/signin', component: SigninComponent},
  {path: 'songs', component: SongListComponent},
  {path: 'songs/new', component: SongFormComponent},
  {path: 'songs/view/id', component: SingleSongComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SongListComponent,
    SingleSongComponent,
    SigninComponent,
    SongFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SongsService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
