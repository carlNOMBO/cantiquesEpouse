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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { DiaporamaComponent } from './song-list/diaporama/diaporama.component';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';
import { DiaporamaWindowComponent } from './song-list/diaporama-window/diaporama-window.component';
import { AudioplayComponent } from './audioplay/audioplay.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SongListComponent,
    SingleSongComponent,
    SigninComponent,
    SongFormComponent,
    SidemenuComponent,
    DiaporamaComponent,
    ClickStopPropagationDirective,
    DiaporamaWindowComponent,
    AudioplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModulesModule,
    NoopAnimationsModule
  ],
  providers: [SongsService, AuthService, AuthGuardService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  entryComponents: [DiaporamaComponent]
})
export class AppModule { }
