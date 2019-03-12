import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    title: string = 'Angular-Web-App';
  constructor() { }

  ngOnInit() {
  }

}
