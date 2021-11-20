import { Injectable } from '@angular/core';
import { Song } from '../models/song.model';
import { environment } from 'src/environments/environment'
import { Subject } from 'rxjs';
import songsJSON from '../../data/songs.json';
import * as firestore from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
//import { Database } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  songs: Song[] = songsJSON;
  audios: {id:number,url:string}[] = [
    {"id":217,"url":"./assets/audios/1 - Le Grand Jour.m4a"},
    {"id":379,"url":"./assets/audios/2 - Sur les ailes d'une colombe.m4a"},
    {"id":441,"url":"./assets/audios/3 - C'est La Fin.m4a"},
    {"id":63,"url":"./assets/audios/4 - Je regarde au loin.m4a"},
    {"id":72,"url":"./assets/audios/5 - JESUS t'appelle.m4a"},
    {"id":213,"url":"./assets/audios/6 - Nous Voguons.m4a"},
    {"id":388,"url":"./assets/audios/7 - Tout mon désir.m4a"},
    {"id":240,"url":"./assets/audios/8 - Ma Richesse et ma Gloire.m4a"},
    {"id":356,"url":"./assets/audios/9 - Roc Séculaire.m4a"},
    {"id":224,"url":"./assets/audios/10 - Le Seigneur m'aime.m4a"},
    {"id":155,"url":"./assets/audios/11 - Je possède Un Sauveur.m4a"},
    {"id":44,"url":"./assets/audios/12 - Comment voulez-vous.m4a"},
    {"id":220,"url":"./assets/audios/13 - Le Lys de la vallée.m4a"},
    {"id":150,"url":"./assets/audios/14 - Je n'aurai pas à traverser.m4a"},
    {"id":446,"url":"./assets/audios/15 - A Golgotha.m4a"},
    {"id":311,"url":"./assets/audios/BENIS SOIT FILS DEDIEU.m4a"},
    {"id":312,"url":"./assets/audios/plus tard nous saurons.m4a"}
  ]

  songSubject = new Subject<Song[]>();

  constructor() {
    this.songs = this.sortSongsByTiles(this.songs);

        // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDDyW_6LliT2L-ZUzCWrT5euL7GNTy0Vsg",
      authDomain: "cantiques-de-l-epouse.firebaseapp.com",
      databaseURL: "https://cantiques-de-l-epouse-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "cantiques-de-l-epouse",
      storageBucket: "cantiques-de-l-epouse.appspot.com",
      messagingSenderId: "675595001862",
      appId: "1:675595001862:web:17af1d8447161556e32387"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
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

  findSongAudioUrl (id: number){
    var url = "";
    for (const audio of this.audios) {
      if(id == audio.id){
        url=audio.url;
        break;
      }
    }
    return url;
  }
}
