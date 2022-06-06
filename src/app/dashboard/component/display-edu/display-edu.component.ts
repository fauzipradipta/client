import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Education } from 'src/app/model/education';

@Component({
  selector: 'app-display-edu',
  templateUrl: './display-edu.component.html',
  styleUrls: ['./display-edu.component.css'],
})
export class DisplayEduComponent implements OnInit {
  @Input()
  edu: any = [];
  @Output()
  eduId: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  deleteEdu(id: string): void {
    console.log('In Child ' + id);
    this.eduId.emit(id);
  }
}
