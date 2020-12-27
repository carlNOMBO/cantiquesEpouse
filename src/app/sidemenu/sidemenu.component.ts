import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenavContainer, MatSidenav, MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  reason = '';
  
  constructor() { }

  ngOnInit() {
  }

  /* Set the width of the side navigation to 250px */
  openNav() {
    document.getElementById("mySidenav").style.width = "215px";
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }  
  
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
