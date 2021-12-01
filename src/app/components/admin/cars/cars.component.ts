import { Component, OnInit } from '@angular/core';
import {ICAr} from "../../../interfaces";
import {CarService} from "../../../services";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICAr[];

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value)
  }

}
