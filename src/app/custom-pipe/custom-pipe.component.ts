
import { Observable, of, Subscription, } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Component, OnDestroy } from '@angular/core';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnDestroy{
  members = [];
  itemPerPage = 10;
  delayedObservable$: Observable<any>;

  memberlistSubscription: Subscription;
  memberlist: []

  constructor(public appService: AppService) {
    this.memberlistSubscription = appService.getCustomerList(this.itemPerPage).subscribe(list =>{
      this.memberlist = list;
    });
  }
  changeSortOrder(itemPerPage:number){
    this.itemPerPage = itemPerPage;
    this.memberlistSubscription = this.appService.getCustomerList(this.itemPerPage).subscribe(list =>{
      this.memberlist = list;
    });
  }
  // constructor(public appService: AppService) {
  //   this.delayedObservable$ = appService.getCustomerList(this.itemPerPage);
  // }
  // changeSortOrder(itemPerPage:number){
  //   this.itemPerPage = itemPerPage;
  //   this.delayedObservable$ = this.appService.getCustomerList(this.itemPerPage);
  // }
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

  ngOnDestroy(): void {
    this.memberlistSubscription.unsubscribe();
  }
}
