import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from 'src/app/models/song.model';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-diaporama-window',
  templateUrl: './diaporama-window.component.html',
  styleUrls: ['./diaporama-window.component.scss']
})
export class DiaporamaWindowComponent implements OnInit {

  song: Song;
  content : string[];
  index : number;

  constructor(private route: ActivatedRoute, private songsService: SongsService ) { }

  ngOnInit() {
    this.index = 0;
    this.content = [];
    this.song = new Song();
    this.song = this.songsService.getSongById(Number(this.route.snapshot.paramMap.get('id')));

    let choir : string = "<b> <p>Choeur :<p>"+this.song.choir+"</b>";

    for (let i = 0; i < this.song.verses.length; i++) {
      this.content.push(this.song.verses[i].text);
      if(this.song.choir)
        this.content.push(choir);
    }

    const strWindowFeatures = "resizable=yes,scrollbars=yes,status=yes,fullScreen=yes";
    let windowObjectReference = window.open(
      "",
      "DiaporamaWindow",
      strWindowFeatures
    );
  }

  onBackward(){
    if (this.index > 0) {
      this.index--;
    }
  }

  onForeward(){
    if(this.index < this.content.length - 1)
      this.index++
  }

}
