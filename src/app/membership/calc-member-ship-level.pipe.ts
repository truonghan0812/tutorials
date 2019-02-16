import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcMemberShipLevel',
  pure: true
})
export class CalcMemberShipLevelPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return this.getMemberShipLevel(value);
  }
  getMemberShipLevel(point: number): String{
    console.info("---calcMemberShipLevel runs---");
    this.heavyCalculation(10);
    if(point > 900){
      return 'Platinum';
    }else if(point > 700){
      return 'Gold';

    }else if(point > 500){
      return 'Silver';
    }
    return 'Basic';
  }
  heavyCalculation(ms: number) {
    console.info("---heavyCalculation runs---");
    let start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
}