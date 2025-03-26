import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarApiService } from '../../service/car-api.service';
import { ICar, NewCar } from '../../interfaces/car';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-car-list',
  imports: [CommonModule, CarComponent],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  
  constructor(private _carApiService:CarApiService) {}

  public carsData:ICar|any;
  public show:boolean=false;

  ngOnInit() {
    this.getCars()
  }

  getCars() {
    this._carApiService.getCarDetails().subscribe(carsData =>
      { this.carsData = carsData
    });
  }

  addCar(make:string, model:string, year:string,imageUrl:string):boolean {
    let addCar:ICar;
    addCar=new NewCar(make,model,year,imageUrl);
    this._carApiService.addCarDetails(addCar).subscribe(carsData =>
      { this.carsData = carsData}
    );

    return false;
  }

}
