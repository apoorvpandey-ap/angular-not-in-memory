import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Vikram Batra' },
      { id: 12, name: 'Sanjay Kumar' },
      { id: 13, name: 'Anuj Nayyar' },
      { id: 14, name: 'Rajesh Singh Adhikari' },
      { id: 15, name: 'Gurjinder Singh Suri' },
      { id: 16, name: 'Digendra Kumar' },
      { id: 17, name: 'Balwan Singh' },
      { id: 18, name: 'Imliakum Ao' },
      { id: 19, name: 'Padmapani Acharya' },
      { id: 20, name: 'Rupesh Kumar' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}