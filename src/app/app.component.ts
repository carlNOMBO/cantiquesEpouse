import {
  Component,
  OnInit,
  OnChanges,
  ComponentFactoryResolver,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
  SimpleChanges
} from '@angular/core';
import {AudioplayComponent} from './audioplay/audioplay.component';
import {SongsService} from './services/songs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

  songid: number;

  @ViewChild('appcontainer', {static : false, read : ViewContainerRef})
  viewPlayerContainerRef: ViewContainerRef;

  private playerComponentRef: ComponentRef<any>;

  constructor(private songsService: SongsService, private playerFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    this.songsService.playMusicNotifyObservable.subscribe((songID: number) => {
      this.songid = songID;
      this.onPlayMusique(this.songid);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    /*if (changes.hasOwnProperty('songID')) {
      console.log(changes.songID);
    }*/
  }

  // Méthode permettant de lancer le lecteur de musique
  onPlayMusique(id: number) {
    if (this.playerComponentRef != null) {
      this.playerComponentRef.destroy();
    }
    const childComponent = this.playerFactoryResolver.resolveComponentFactory(AudioplayComponent);
    this.playerComponentRef = this.viewPlayerContainerRef.createComponent(childComponent);
    this.playerComponentRef.instance.songId = id;
    this.playerComponentRef.instance.songTitle = this.songsService.getSongById(id).title;
  }
}
