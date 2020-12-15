import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  
  @Output() btnSearchClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() languageChanged: EventEmitter<string> = new EventEmitter<string>();

  title = "Cantiques de l'Epouse";
  imgPathTrumpet: any = './assets/img/trumpet1.png';
  languages = ['Tous','Francais','English','Lingala','Swahili','Italiano'];

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

  onBtnSearchClicked(value: string){    
    this.searchValue = value;
    this.btnSearchClicked.emit(value)
  }

  onLanguageChanged(value: string){
    this.languageChanged.emit(value);
  }
}
