import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = "Cantiques de l'Epouse";
  imgPathTrumpet: any = './assets/img/trumpet1.png';
  constructor() { }

  ngOnInit() {
  }

}
