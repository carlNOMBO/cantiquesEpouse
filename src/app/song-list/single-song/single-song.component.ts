import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Song } from '../../models/song.model';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-single-song',
  templateUrl: './single-song.component.html',
  styleUrls: ['./single-song.component.scss']
})
export class SingleSongComponent implements OnInit {

  song: Song;
  imgPathBack: any = '../../../assets/img/arrow_back-24px.svg';

  constructor(private location: Location, private route: ActivatedRoute, private songsService: SongsService) { }

  ngOnInit() {
    this.song = new Song();
    this.song = this.songsService.getSongById(Number(this.route.snapshot.paramMap.get('id')));
  }

  onBack() {
    this.location.back();
  }
}
