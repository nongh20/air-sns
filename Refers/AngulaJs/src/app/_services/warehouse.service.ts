import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class WarehouseService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(`${environment.apiUrl}/warehouses`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/warehouses/${id}`);
    }

    register(warehouse) {
        return this.http.post(`${environment.apiUrl}/warehouses`, warehouse);
    }

    update(warehouse) {
        return this.http.put(`${environment.apiUrl}/warehouses/${warehouse.id}`, warehouse);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/warehouses/${id}`);
    }
}