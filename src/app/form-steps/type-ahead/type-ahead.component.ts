import { Component, Input, forwardRef } from "@angular/core";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";


@Component({
  selector: "app-typeahead",
  templateUrl: "./type-ahead.component.html",
  styles: [
    `
      .form-control {
        width: 300px;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TypeAheadComponent),
      multi: true
    }
  ]
})
export class TypeAheadComponent {
  public model: any;
  @Input() data;

  constructor(){}

  onChange: any = () => { };
  onTouched: any = () => { };

  registerOnChange( fn : any ) : void {
    this.onChange = fn;
  }

  registerOnTouched( fn : any ) : void {
    this.onTouched = fn;
  }

  writeValue(value) {
    this.model = value;
    this.onChange(value);
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term =>
        term.length < 2
          ? []
          : this.data
              .map(queen => queen.name)
              .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
  );
  itemSelected($event) {
    this.writeValue($event.item);
  }
}
