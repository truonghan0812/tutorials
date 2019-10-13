import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getCustomerList(itemPerPage: number): Observable<any>{
    return of(sample_memmbers.slice(0, itemPerPage?itemPerPage:10))
              .pipe(delay(2000));
  }
}
const sample_memmbers = [
  {
    firstName: 'Jame',
    lastName: 'Butt',
    point: 500
  },
  {
    firstName: 'Jame',
    lastName: 'Butt',
    point: 500
  },
  {
    firstName: 'Jame',
    lastName: 'Butt',
    point: 500
  },
  {
    firstName: 'Josephine',
    lastName: 'Darakjy',
    point: 200
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Lenna',
    lastName: 'Paprocki',
    point: 800
  },
  {
    firstName: 'Cammy',
    lastName: 'Albares',
    point: 900
  },
  {
    firstName: 'Ammie',
    lastName: 'Perin',
    point: 1000
  },
  {
    firstName: 'Josephine',
    lastName: 'Darakjy',
    point: 200
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Lenna',
    lastName: 'Paprocki',
    point: 800
  },
  {
    firstName: 'Cammy',
    lastName: 'Albares',
    point: 900
  },
  {
    firstName: 'Ammie',
    lastName: 'Perin',
    point: 1000
  },
  {
    firstName: 'Jame',
    lastName: 'Butt',
    point: 500
  },
  {
    firstName: 'Jame',
    lastName: 'Butt',
    point: 500
  },
  {
    firstName: 'Jame',
    lastName: 'Butt',
    point: 500
  },
  {
    firstName: 'Josephine',
    lastName: 'Darakjy',
    point: 200
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Lenna',
    lastName: 'Paprocki',
    point: 800
  },
  {
    firstName: 'Cammy',
    lastName: 'Albares',
    point: 900
  },
  {
    firstName: 'Ammie',
    lastName: 'Perin',
    point: 1000
  },
  {
    firstName: 'Josephine',
    lastName: 'Darakjy',
    point: 200
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Josephine',
    lastName: 'Venere',
    point: 700
  },
  {
    firstName: 'Lenna',
    lastName: 'Paprocki',
    point: 800
  },
  {
    firstName: 'Cammy',
    lastName: 'Albares',
    point: 900
  },
  {
    firstName: 'Ammie',
    lastName: 'Perin',
    point: 1000
  }
];