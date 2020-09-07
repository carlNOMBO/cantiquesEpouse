import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  searchValueChange: EventEmitter<string> = new EventEmitter<string>();
  searchValue: string;

  title = "Cantiques de l'Epouse";
  imgPathTrumpet: any = './assets/img/trumpet1.png';
  languages = ['Français'];

  constructor() { }

  ngOnInit() {
    this.searchValue = '';
  }

  onChange(value: string) {
    this.searchValueChange.emit(value);
  }

}
