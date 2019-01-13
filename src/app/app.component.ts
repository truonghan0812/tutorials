import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { List, Map } from 'immutable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  members :List<any>;
  title: String = 'tutorials';
  itemPerPage: number = 5;
  membersInCurrentPage: List<any>;
  ngOnInit(): void {
    this.members = List(sample_memmbers);
    this.changeNumberOfItem(this.itemPerPage);
  }
  changeNumberOfItem(itemPerPage: number) {
    this.itemPerPage = itemPerPage;
    this.membersInCurrentPage = this.members.setSize(itemPerPage);
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