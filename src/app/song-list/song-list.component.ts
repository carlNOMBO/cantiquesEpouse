import { Component, OnInit } from '@angular/core';
import { SongsService } from '../services/songs.service';
import { Song } from '../models/song.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  songs: Song[];
  songsSubscription: Subscription;

  constructor(private songsService: SongsService, private router: Router) { }

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

  onSearch(text: any) {
    this.songs = this.songsService.filterSongsByTitleChoir(text);
  }

  getChoirInline(choir: string) {
    const textByLines = choir.split('<br>');
    let text = '';
    textByLines.forEach((line) => {text += line + ' '; });
    return text;
  }
}
