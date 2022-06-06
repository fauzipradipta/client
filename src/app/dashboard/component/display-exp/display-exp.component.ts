import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experience } from 'src/app/model/experience';

@Component({
  selector: 'app-display-exp',
  templateUrl: './display-exp.component.html',
  styleUrls: ['./display-exp.component.css'],
})
export class DisplayExpComponent implements OnInit {
  @Input('exp')
  exp: any = [];
  @Output()
  expId: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  deleteExp(id: string): void {
    console.log('In Child ' + id);
    this.expId.emit(id);
  }
}
