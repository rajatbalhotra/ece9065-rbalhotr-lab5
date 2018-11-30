import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Instrument } from './instrument';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const instruments = [
      { id: 11, name: 'Drums' },
  { id: 12, name: 'Flute' },
  { id: 13, name: 'Guitar' },
  { id: 14, name: 'Harmonium' },
  { id: 15, name: 'Melodeon' },
  { id: 16, name: 'Piano' },
  { id: 17, name: 'Saxophone' },
  { id: 18, name: 'Tabla' },
  { id: 19, name: 'Trumpet' },
  { id: 20, name: 'Violin' }
    ];
    return {instruments};
  }

  // Overrides the genId method to ensure that a instrument always has an id.
  // If the instruments array is empty,
  // the method below returns the initial number (11).
  // if the instruments array is not empty, the method below returns the highest
  // instrument id + 1.
  genId(instruments: Instrument[]): number {
    return instruments.length > 0 ? Math.max(...instruments.map(instrument => instrument.id)) + 1 : 11;
  }
}
