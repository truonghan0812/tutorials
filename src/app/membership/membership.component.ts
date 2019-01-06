import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent{
  @Input() members = [];
  itemPerPage = 10;

  constructor() {}
  changeSortOrder(itemPerPage:number){
    this.itemPerPage = itemPerPage;
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
