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