import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent{
  members = [];
  numberOfTimes = 0;
  itemPerPage = 5;

  constructor() {
    this.members = sample_memmbers;
  }
  changeSortOrder(itemPerPage:number){
    this.itemPerPage = itemPerPage;
    this.members = sample_memmbers.slice(0, this.itemPerPage);
  }
  getMemberShipLevel(point: number): String{
    console.info("---getMemberShipLevel---");
    
    if(point > 900){
      return 'Platinum';
    }else if(point > 700){
      return 'Gold';

    }else if(point > 500){
      return 'Silver';
    }
    return 'Basic';
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
  }
];
