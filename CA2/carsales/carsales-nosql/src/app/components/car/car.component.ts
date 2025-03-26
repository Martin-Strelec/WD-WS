import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { CarApiService } from '../../service/car-api.service';
import { ICar } from '../../interfaces/car';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car',
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input() carData: ICar | undefined;
  @Output() carDeletedEvent = new EventEmitter<string>()
  @Output() carUpdatedEvent = new EventEmitter<string>()
  public carImageWidth: number = 250

  constructor(private _carApiService: CarApiService) { }

  deleteCar(carId: string) {
    this._carApiService.delCarDetails(carId).subscribe(result => {
      console.log(result);
      this.carDeletedEvent.emit("car got deleted");
    });
  }
}
