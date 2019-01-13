import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-membership",
  templateUrl: "./membership.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./membership.component.scss"]
})
export class MembershipComponent {
  @Input() members = [];
  constructor() {}
  calcMemberShipLevel(point: number): String {
    console.info("---calcMemberShipLevel runs---");
    this.heavyCalculation(10);
    if (point > 900) {
      return "Platinum";
    } else if (point > 700) {
      return "Gold";
    } else if (point > 500) {
      return "Silver";
    }
    return "Basic";
  }
  heavyCalculation(ms: number) {
    let start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
}
