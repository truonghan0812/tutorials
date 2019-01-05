import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent{
  members = [];
  itemPerPage = 10;

  constructor() {
    this.members = sample_memmbers.slice(0, this.itemPerPage);
  }
  changeSortOrder(itemPerPage:number){
    this.itemPerPage = itemPerPage;
    this.members = sample_memmbers.slice(0, this.itemPerPage);
  }
  getMemberShipLevel(point: number): String{
    console.info("---getMemberShipLevel---");
    this.heavyCalculation(1);
    if(point > 900){
      return 'Platinum';
    }else if(point > 700){
      return 'Gold';

    }else if(point > 500){
      return 'Silver';
    }
    return 'Basic';
  }
  heavyCalculation(ms){
    let start = new Date().getTime();
    let end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
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
