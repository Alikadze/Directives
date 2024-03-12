import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]',
  standalone: true
})
export class MyIfDirective {
  private condition: boolean = false;

  @Input()
  set appMyIf(condition: boolean) {
    this.condition = condition;
  }



}
