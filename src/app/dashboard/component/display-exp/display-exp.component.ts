import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';

@Component({
  selector: 'app-display-exp',
  templateUrl: './display-exp.component.html',
  styleUrls: ['./display-exp.component.css'],
})
export class DisplayExpComponent implements OnInit {
  @Input('exp')
  exp: Experience[] = [];
  constructor() {}

  ngOnInit(): void {}
}
