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
                case url.endsWith('/lunchspots/') && method === 'GET':
                    return getLunchSpots();
                case url.match('/lunchspot') && method === 'PUT':
                    return changeDeliveryStatus();
                case url.match('/lunchspot') && method === 'DELETE':
                    return deleteLunchSpots();
                case url.match('/lunchspot') && method === 'POST':
                    return addLunchSpots();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

         // route functions
         function getLunchSpots() {
            let lunchSpots = JSON.parse(localStorage.getItem("lunchSpots") || "[]");
            return ok(lunchSpots);
        }

        function deleteLunchSpots() {
            const lunchSpotId = url.split("/")[2];
            let lunchSpots = JSON.parse(localStorage.getItem("lunchSpots") || "[]");
            
            let objIndex = lunchSpots.findIndex((obj => obj.id == lunchSpotId));

            lunchSpots.splice(objIndex,1);
            localStorage.setItem("lunchSpots", JSON.stringify(lunchSpots));
            return ok();
        }

        function addLunchSpots() {
            const lunchSpotBody = body
            let lunchSpots = JSON.parse(localStorage.getItem("lunchSpots") || "[]");
            
            lunchSpots.push(lunchSpotBody)
            localStorage.setItem("lunchSpots", JSON.stringify(lunchSpots));
            return ok(lunchSpotBody);
        }

        function changeDeliveryStatus(){
            const lunchSpotBody = body
            let lunchSpots = JSON.parse(localStorage.getItem("lunchSpots") || "[]");
            
            let objIndex = lunchSpots.findIndex((obj => obj.id == lunchSpotBody.id));

            lunchSpots[objIndex] = lunchSpotBody;
            localStorage.setItem("lunchSpots", JSON.stringify(lunchSpots));
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