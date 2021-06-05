import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  searchValueChange: EventEmitter<{searchVal:string , mode:number}> = new EventEmitter<{searchVal:string , mode:number}>();
  searchValue: string;

  @Output() btnSearchClicked: EventEmitter<{searchVal:string , mode:number}> = new EventEmitter<{searchVal:string , mode:number}>();
  @Output() languageChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() menuToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  title = "Cantiques de l'Epouse";
  imgPathTrumpet: any = './assets/img/trumpet1.png';
  languages = ['Tous','Francais','English','Lingala','Swahili','Italiano'];
  selectedMode = 1;

  constructor(private router: Router) { }

  ngOnInit() {
    this.searchValue = '';
  }

  onToggleMenu(){
    this.menuToggled.emit(true);
  }

  onChange(value: string) {
    //console.log(this.selectedMode);
    this.searchValueChange.emit({searchVal:value , mode:this.selectedMode});
    //this.searchValueChange.emit(value);
  }

  onSearch(value: string) {
    this.searchValue = value;
    //this.searchValueChange.emit(value);
    //if (value) {this.router.navigate(['/songs']); }
    this.searchValueChange.emit({searchVal:value , mode:this.selectedMode});
  }

  onBtnSearchClicked(value: string){
    this.searchValue = value;
    this.btnSearchClicked.emit({searchVal:value , mode:this.selectedMode})
  }

  onLanguageChanged(value: string){
    this.languageChanged.emit(value);
  }
}
