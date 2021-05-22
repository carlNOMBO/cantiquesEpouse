import { Component, OnInit } from '@angular/core';
import { SongsService } from '../services/songs.service';
import { Song } from '../models/song.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { DiaporamaComponent } from './diaporama/diaporama.component';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  songs: Song[];
  songsSubscription: Subscription;

  constructor(private songsService: SongsService, private router: Router,
              private dialog: MatDialog) { }

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
}
