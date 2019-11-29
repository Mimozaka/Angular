import { Injectable } from '@angular/core';
import { CARS } from './mock-cars'
import { HttpClient } from '@angular/common/http';
import { Car } from './car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private http: HttpClient) { }

  getCars(): Promise<Car[]>{
    return Promise.resolve(CARS);
  }
  
  getCar(plateNumber: string): Promise<Car>{
    return Promise.resolve(CARS.find(car => car.plateNumber==plateNumber));
  }

  getCarsWithObservable(plateNumber): Observable<any> {
    let obs =this.http.get("http://localhost:8081/cars/"+ plateNumber);
    obs.subscribe((response: Response) => response);
    return obs;
  }
}
