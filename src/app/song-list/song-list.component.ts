import { Component, OnInit } from '@angular/core';
import { SongsService } from '../services/songs.service';
import { Song } from '../models/song.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  songs: Song[];

  constructor(private songsService: SongsService, private router: Router) { }

  ngOnInit() {
    this.songs = this.songsService.getSongs();
  }

  onReadSong(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }
}
