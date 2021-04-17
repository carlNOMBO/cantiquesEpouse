import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Song } from 'src/app/models/song.model';



@Component({
  selector: 'app-diaporama',
  templateUrl: './diaporama.component.html',
  styleUrls: ['./diaporama.component.scss']
})
export class DiaporamaComponent implements OnInit {

  content : string[];
  index : number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Song) { }

  ngOnInit() {
    this.index = 0;
    this.content = [];

    let choir : string = "<b> <p>Choeur :<p>"+this.data.choir+"</b>";

    for (let i = 0; i < this.data.verses.length; i++) {
      this.content.push(this.data.verses[i].text);
      if(this.data.choir)
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

