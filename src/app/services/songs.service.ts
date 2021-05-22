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
    this.songs = this.sortSongsByTiles(this.songs);
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
    const regex = /’|`/g;
    text = text.replace(regex,"'");
    this.songs.forEach( (song) => {
      if (song.title.toUpperCase().includes(text.trim().toUpperCase()) || song.choir.toUpperCase().includes(text.trim().toUpperCase())) {
        songs.push(song);
      }
    });
    return this.sortSongsByTiles(songs);
  }

  filterSongsBylanguage(text: string) {
    const songs: Song[] = new Array();
    const regex = /’|`/g;
    text = text.replace(regex,"'");
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

  filterSongsByChoir(text: string): Song[]{
    const songs: Song[] = new Array();
    const regex = /’|`/g;
    text = text.replace(regex,"'");
    this.songs.forEach( (song) => {
      if (song.choir.toUpperCase().includes(text.trim().toUpperCase())) {
        songs.push(song);
      }
    });
    return songs;
  }

  filterSongsByVerses(text: string): Song[]{
    const songs: Song[] = new Array();
    const regex = /’|`/g;
    text = text.replace(regex,"'");
    this.songs.forEach( (song) => {
      for (let i = 0; i < song.verses.length; i++) {
        if (song.verses[i].text.toUpperCase().includes(text.trim().toUpperCase())) {
          songs.push(song);
          i=song.verses.length+1;
        }
      }
    });
    return this.sortSongsByTiles(songs);
  }

  findInAll(text: string): Song[]{
    const songs: Song[] = new Array();
    const regex = /’|`/g;
    text = text.replace(regex,"'");
    this.songs.forEach( (song) => {
      if (song.title.toUpperCase().includes(text.trim().toUpperCase())) {
        songs.push(song);
      }else{
        if (song.choir.toUpperCase().includes(text.trim().toUpperCase())) {
          songs.push(song);
        }else{
          for (let i = 0; i < song.verses.length; i++) {
            if (song.verses[i].text.toUpperCase().includes(text.trim().toUpperCase())) {
              songs.push(song);
              i=song.verses.length+1;
            }
          }
        }
      }
    });
    return this.sortSongsByTiles(songs);
  }

  sortSongsByTiles(songs: Song[]):Song[]{
    let songsc : Song[] = songs.slice();
    let found : boolean;
    let j: number = 0;

    do{
      found = false;
      j++;
      for (let i = 0; i < songsc.length-j; i++) {
       if (songsc[i].title > songsc[i+1].title) {
         let tmp : Song = songsc[i+1];
         songsc[i+1] = songsc[i];
         songsc[i] = tmp;
         found = true;
       }
      }
    }while(found);

    return songsc;
  }
}
