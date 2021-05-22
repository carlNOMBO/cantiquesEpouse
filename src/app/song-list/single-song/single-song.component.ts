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
  diapoWindowReference: any;

  constructor(private location: Location, private router: Router,
              private route: ActivatedRoute, private songsService: SongsService,
              private dialog: MatDialog,
              private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.song = new Song();
    this.song = this.songsService.getSongById(Number(this.route.snapshot.paramMap.get('id')));

  }

  /*ngAfterViewInit() {
    setTimeout(() => {
      //create the component dynamically
      const factory = this.componentFactoryResolver.resolveComponentFactory(DiaporamaComponent);
      const comp: ComponentRef<DiaporamaComponent> =
        this.viewContainerRef.createComponent(factory);
      //in case you also need to inject an input to the child,
      //like the windows reference
      comp.instance.data = this.song;
      //add you freshly baked component on the windows
      this.diapoWindowReference.document.body.appendChild(comp.location.nativeElement);
    });
  }*/

  onBack() {
    this.location.back();
  }

  onBtnSearchClicked(text: any) {
    this.router.navigate(['/songs']);
  }

  onPlay(){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = window.innerWidth+'px';
    dialogConfig.height = '100%';
    dialogConfig.data = this.song;
    this.dialog.open(DiaporamaComponent, dialogConfig);

    /*//create the component dynamically
    const factory = this.componentFactoryResolver.resolveComponentFactory(DiaporamaComponent);
    const comp: ComponentRef<DiaporamaComponent> =
      this.viewContainerRef.createComponent(factory);
    //in case you also need to inject an input to the child,
    //like the windows reference
    comp.instance.data = this.song;
    //add you freshly baked component on the windows
    this.diapoWindowReference.document.body.appendChild(comp.location.nativeElement);*/

    this.diapoWindowReference = window.open('', '_blank', "DescriptiveWindowName");
  }
}
