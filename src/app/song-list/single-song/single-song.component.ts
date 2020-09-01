import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute, private songsService: SongsService) { }

  ngOnInit() {
    this.song = new Song();
    this.song = this.songsService.getSongById(Number(this.route.snapshot.paramMap.get('id')));
  }

}
