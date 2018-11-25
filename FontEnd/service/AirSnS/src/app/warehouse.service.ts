import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:5001/api/warehouses';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public get() {
    // Get all warehouse data
    return this.http.get(this.accessPointUrl, { headers: this.headers });
  }

  public add(warehouse) {
    return this.http.post(this.accessPointUrl, warehouse, { headers: this.headers });
  }

  public remove(warehouse) {
    return this.http.delete(this.accessPointUrl + '/' + warehouse.id, { headers: this.headers });
  }

  public update(warehouse) {
    return this.http.put(this.accessPointUrl + '/' + warehouse.id, warehouse, { headers: this.headers });
  }
}
