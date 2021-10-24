import { Component, Input, OnInit } from '@angular/core';
import { SongsService } from '../services/songs.service';

@Component({
  selector: 'app-audioplay',
  templateUrl: './audioplay.component.html',
  styleUrls: ['./audioplay.component.scss']
})
export class AudioplayComponent implements OnInit {
  @Input() songId : number;
  @Input() songTitle : string;
  testAudio: any = './assets/audios/plus tard nous saurons.m4a';

  constructor(private songsService: SongsService) { }

  ngOnInit() {
    console.log("id : "+this.songId+" title : "+this.songTitle);
  }

  getSrc(){
    return this.songsService.findSongAudioUrl(this.songId);
  }
}
