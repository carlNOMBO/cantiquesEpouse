import { Injectable } from '@angular/core';
import { Song } from '../models/song.model';
import { Subject } from 'rxjs';
import songsJSON from '../../data/songs.json';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  songs: Song[] = songsJSON;

  songSubject = new Subject<Song[]>();

  constructor() {
    //this.songs = songsJSON;
  }

  emitSongs() {
    this.songSubject.next(this.songs.slice());
  }

  getSongs(): Song[] {
    return this.songs;
  }

  getSongById(id: number) {
    for (let i = 0; i < this.songs.length; i++)
    {
      if (this.songs[i].id === id) {
        return this.songs[i];
      }
    }
  }

  filterSongsByTitleChoir(text: string) {
    const songs: Song[] = new Array();

    this.songs.forEach( (song) => {
      if (song.title.toUpperCase().includes(text.trim().toUpperCase()) || song.choir.toUpperCase().includes(text.trim().toUpperCase())) {
        songs.push(song);
      }
    });
    return songs;
  }

  filterSongsBylanguage(text: string) {
    const songs: Song[] = new Array();
    
    if (text.toUpperCase().includes('TOUS')) {
      return this.songs ;
    }

    this.songs.forEach( (song) => {      
      if (song.language.toUpperCase().includes(text.trim().toUpperCase())) {
        songs.push(song);
      }
    });
    return songs;
  }
}
