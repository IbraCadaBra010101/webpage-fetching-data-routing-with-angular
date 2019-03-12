import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // h1Style: boolean = false;
  // buttonStyle: boolean = false;
  users: Object;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getSomeFakeData().subscribe(data => {
       this.users = data;
       console.log(this.users);
    });

  }


}
