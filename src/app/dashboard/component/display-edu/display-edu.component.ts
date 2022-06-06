import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';

@Component({
  selector: 'app-display-edu',
  templateUrl: './display-edu.component.html',
  styleUrls: ['./display-edu.component.css'],
})
export class DisplayEduComponent implements OnInit {
  @Input()
  edu: Education[] = [];
  constructor() {}

  ngOnInit(): void {}
}
