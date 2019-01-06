import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  members = [];
  title = 'tutorials';

  ngOnInit(): void {
    this.getAllMembers();
  }
  getAllMembers(){
    this.members = Object.assign(sample_memmbers);
  }
  changeNumberOfItem(itemPerPage: number) {
    this.getAllMembers();
    this.members.splice(0,itemPerPage);
  }
}
const sample_memmbers = [
  {
    firstName: 'Jame',
    lastName: 'Butt',
    point: 500
  },
  {
    firstName: 'Jame',
    lastName: 'Butt',
    point: 500
  },
  {
    firstName: 'Jame',
    lastName: 'Butt',
    point: 500
  },
  {
    firstName: 'Josephine',
    lastName: 'Darakjy',
    point: 200
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Lenna',
    lastName: 'Paprocki',
    point: 800
  },
  {
    firstName: 'Cammy',
    lastName: 'Albares',
    point: 900
  },
  {
    firstName: 'Ammie',
    lastName: 'Perin',
    point: 1000
  },
  {
    firstName: 'Josephine',
    lastName: 'Darakjy',
    point: 200
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Lenna',
    lastName: 'Paprocki',
    point: 800
  },
  {
    firstName: 'Cammy',
    lastName: 'Albares',
    point: 900
  },
  {
    firstName: 'Ammie',
    lastName: 'Perin',
    point: 1000
  },
  {
    firstName: 'Jame',
    lastName: 'Butt',
    point: 500
  },
  {
    firstName: 'Jame',
    lastName: 'Butt',
    point: 500
  },
  {
    firstName: 'Jame',
    lastName: 'Butt',
    point: 500
  },
  {
    firstName: 'Josephine',
    lastName: 'Darakjy',
    point: 200
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Lenna',
    lastName: 'Paprocki',
    point: 800
  },
  {
    firstName: 'Cammy',
    lastName: 'Albares',
    point: 900
  },
  {
    firstName: 'Ammie',
    lastName: 'Perin',
    point: 1000
  },
  {
    firstName: 'Josephine',
    lastName: 'Darakjy',
    point: 200
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Lenna',
    lastName: 'Paprocki',
    point: 800
  },
  {
    firstName: 'Cammy',
    lastName: 'Albares',
    point: 900
  },
  {
    firstName: 'Ammie',
    lastName: 'Perin',
    point: 1000
  }
];