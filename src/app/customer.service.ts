import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL="http://localhost:8080/api/v1/customers";
  
  getCustomersList: any;
  router: any;
 constructor(private httpClient: HttpClient) { } 
 
 getCustomerList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }

  createCustomer(customer: Customer): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, customer);
  }
   getCustomerById(id: number): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseURL}/${id}`);
  }
  updateCustomer(id: number, customer: Customer): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
