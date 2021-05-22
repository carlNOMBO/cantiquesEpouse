import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Song } from '../../models/song.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from '../../services/songs.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { DiaporamaComponent } from '../diaporama/diaporama.component';

@Component({
  selector: 'app-single-song',
  templateUrl: './single-song.component.html',
  styleUrls: ['./single-song.component.scss']
})
export class SingleSongComponent implements OnInit {

  song: Song;
  imgPathBack: any = './assets/img/arrow_back-24px.svg';
  diapoWindowReference: Window;

  constructor(private location: Location, private router: Router,
              private route: ActivatedRoute, private songsService: SongsService,
              private dialog: MatDialog,
              private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.song = new Song();
    this.song = this.songsService.getSongById(Number(this.route.snapshot.paramMap.get('id')));

  }

  onBack() {
    this.location.back();
  }

  onBtnSearchClicked(text: any) {
    this.router.navigate(['/songs']);
  }

  onPlay(){
    const url = window.location.href.replace("view","diaporama");//this.router.url
    const windowName = url.replace(/diaporama(.*)/,"diaporama");
    this.diapoWindowReference = window.open(url, windowName, "DescriptiveWindowName");
    this.diapoWindowReference.location.reload();
  }
}
