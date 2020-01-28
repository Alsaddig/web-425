import { Injectable } from '@angular/core';
import { Fruit} from "./fruit";

import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  fruits: Fruit[] = [
    {id: 1, name: "Bananas", pricePerPound: "1.99", quantity: 1},
    {id: 2, name: "Apples", pricePerPound: "3.99", quantity: 3},
    {id: 3, name: "Cherries", pricePerPound: "1.16", quantity: 2},
    {id: 4, name: "Kiwi", pricePerPound: "1.00", quantity: 4},
    {id: 5, name: "Oranges", pricePerPound: "2.99", quantity: 5}
  ]
  constructor() { }
  getFruits(): Observable<Fruit[]> {
    return of(this.fruits);
  }
}
