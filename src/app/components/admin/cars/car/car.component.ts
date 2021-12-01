import {Component, Input, OnInit} from '@angular/core';
import {ICAr} from "../../../../interfaces";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input()
  car: ICAr

  constructor() { }

  ngOnInit(): void {
  }

}
