import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';

@Directive({
  selector: '[myHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef) {}
  @Input() defaultColor: string;
  @Input('myHighLight') highlightColor: string;
  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = null;
  }
}
