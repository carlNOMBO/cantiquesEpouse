import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ActivatedRoute } from '@angular/router';
import { Song } from 'src/app/models/song.model';
import { SongsService } from 'src/app/services/songs.service';



@Component({
  selector: 'app-diaporama',
  templateUrl: './diaporama.component.html',
  styleUrls: ['./diaporama.component.scss']
})
export class DiaporamaComponent implements OnInit {

  song: Song;
  content : string[];
  index : number;

  constructor(private route: ActivatedRoute, private songsService: SongsService) { }

  ngOnInit() {

    this.song = new Song();
    this.song = this.songsService.getSongById(Number(this.route.snapshot.paramMap.get('id')));

    this.index = 0;
    this.content = [];

    let choir : string = "<b> <p>Choeur :<p>"+this.song.choir+"</b>";

    for (let i = 0; i < this.song.verses.length; i++) {
      this.content.push(this.song.verses[i].text);
      if(this.song.choir)
        this.content.push(choir);
    }
  }

  onBackward(){
    //console.log(window.innerWidth);
    if (this.index > 0) {
      this.index--;
    }
  }

  onForeward(){
    //console.log(window.innerWidth);
    if(this.index < this.content.length - 1)
      this.index++
  }
}

