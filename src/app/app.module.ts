import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';

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
// import { Routes, RouterModule } from '@angular/router';
import { SharedModulesModule } from './shared-modules/shared-modules.module';

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
    SharedModulesModule
  ],
  providers: [SongsService, AuthService, AuthGuardService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
