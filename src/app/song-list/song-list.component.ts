import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SongsService } from '../services/songs.service';
import { Song } from '../models/song.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { DiaporamaComponent } from './diaporama/diaporama.component';
import { AudioplayComponent } from '../audioplay/audioplay.component';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  songs: Song[];
  songsSubscription: Subscription;

  @ViewChild('container',{static : false, read : ViewContainerRef})
  viewPlayerContainerRef: ViewContainerRef;

  private playerComponentRef: ComponentRef<any>;

  constructor(private songsService: SongsService, private router: Router,
              private dialog: MatDialog, private playerFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    // this.songs = this.songsService.getSongs();
    this.songsSubscription = this.songsService.songSubject.subscribe((songs: Song[]) => {
      this.songs = songs;
    });
    this.songsService.emitSongs();
  }

  onReadSong(id: number) {
    this.router.navigate(['/songs', 'view', id]);
  }

  onSearch(searchObject: {searchVal:string , mode:number}) {
    switch (searchObject.mode) {
      case 1: this.songs = this.songsService.filterSongsByTitleChoir(searchObject.searchVal);
        break;

      case 2: this.songs = this.songsService.filterSongsByVerses(searchObject.searchVal);
        break;

      case 3: this.songs = this.songsService.findInAll(searchObject.searchVal);
        break;

      default: this.songs = this.songsService.filterSongsByTitleChoir(searchObject.searchVal);
        break;
    }
  }

  onBtnSearchClicked(searchObject: {searchVal:string , mode:number}) {
    this.router.navigate(['/songs']);
    //this.songs = this.songsService.filterSongsByTitleChoir(text);
  }

  onLanguageChanged(lan: any){
    this.songs = this.songsService.filterSongsBylanguage(lan);
  }

  getChoirInline(choir: string) {
    const textByLines = choir.split('<br>');
    let text = '';
    textByLines.forEach((line) => {text += line + ' '; });
    return text;
  }

  onPlay(id: number){
    const url = window.location.href.replace("view","diaporama");//this.router.url
    const windowName = url+"/diaporama";
    let diapoWindowReference = window.open(url+"/diaporama/"+id, windowName, "DescriptiveWindowName");
    diapoWindowReference.location.reload();
  }

  onPlayMusique(id: number){
    if(this.playerComponentRef != null){
      this.playerComponentRef.destroy();
    }
    let childComponent = this.playerFactoryResolver.resolveComponentFactory(AudioplayComponent);
    this.playerComponentRef = this.viewPlayerContainerRef.createComponent(childComponent);
    this.playerComponentRef.instance.songId = id;
    this.playerComponentRef.instance.songTitle = this.songsService.getSongById(id).title;
  }
}
