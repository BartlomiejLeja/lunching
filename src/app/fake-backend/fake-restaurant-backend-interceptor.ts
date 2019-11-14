import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class FakeRestaurantInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

         // wrap in delayed observable to simulate server api call
         return of(null)
         .pipe(mergeMap(handleRoute))
         .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
         .pipe(delay(50))
         .pipe(dematerialize());   

         function handleRoute() {
            switch (true) {
                case url.endsWith('/restaurants/') && method === 'GET':
                    return getRestaurants();
                case url.match('/restaurant') && method === 'PUT':
                    return changeDeliveryStatus();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

         // route functions
         function getRestaurants() {
            let lands = JSON.parse(localStorage.getItem("restaurant") || "[]");
            return ok(lands);
        }

        function changeDeliveryStatus(){
            const restaurantBody = body
            let restaurants = JSON.parse(localStorage.getItem("restaurant") || "[]");
            
            let objIndex = restaurants.findIndex((obj => obj.id == restaurantBody.id));

            restaurants[objIndex].lunchSpots = restaurantBody.lunchSpots;
            localStorage.setItem("restaurant", JSON.stringify(restaurants));
            return ok();
        }
    
        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeRestaurantInterceptor,
    multi: true
};