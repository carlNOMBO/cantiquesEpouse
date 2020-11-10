import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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
  languages = ['Tous','Français','English','Lingala','Swahili','Italiano'];

  constructor(private router: Router) { }

  ngOnInit() {
    this.searchValue = '';
  }

  onChange(value: string) {
    this.searchValueChange.emit(value);
  }

  onSearch(value: string) {
    this.searchValue = value;
    //this.searchValueChange.emit(value);
    //if (value) {this.router.navigate(['/songs']); }
    this.searchValueChange.emit(value);
  }

}
