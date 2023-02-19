import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rezept } from './customer';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomersLarge(): Promise<Rezept[]> {
    return this.http
      .get<any>('../assets/customers-large.json')
      .toPromise()
      .then((res) => <Rezept[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
