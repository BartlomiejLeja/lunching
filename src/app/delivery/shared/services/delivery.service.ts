import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Restaurant } from '../models/restaurant.model';

@Injectable()
export class DeliveryService {
    constructor(private http: HttpClient) {}

    public getRestaurants() : Observable<Restaurant> {
        return this.http.get<Restaurant>(environment.apiUrl)
    }
}