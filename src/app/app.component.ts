import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lunching-recruitment-task';

  constructor(){
    let restaurant =  [
      { 
        "id" : 1234,
        "restaurantName":"Mocked restaurant",
        "lunchSpots":[ 
           { 
              "lunchSpotId":106852,
              "name":"garaż",
              "status":"UNDELIVERED",
              "address":"Kątowa 4A",
              "company":"Novomatic",
              "deliveryTime":"12:30"
           },
           { 
              "lunchSpotId":106862,
              "name":"stara portiernia, skrzydło prawe",
              "status":"UNDELIVERED",
              "address":"Krakowska 368",
              "company":"Novomatic",
              "deliveryTime":"12:30"
           },
           { 
              "lunchSpotId":106859,
              "name":"stara portiernia, skrzydło prawe",
              "status":"DELIVERED",
              "address":"Krakowska 368",
              "company":"Novomatic",
              "deliveryTime":"12:30"
           },
           { 
              "lunchSpotId":106857,
              "name":"stara portiernia, skrzydło prawe",
              "status":"DELIVERED",
              "address":"Krakowska 368",
              "company":"Novomatic",
              "deliveryTime":"12:30"
           },
           { 
              "lunchSpotId":106860,
              "name":"garaż",
              "status":"UNDELIVERED",
              "address":"Kątowa 4A",
              "company":"Novomatic",
              "deliveryTime":"12:30"
           },
           { 
              "lunchSpotId":106868,
              "name":"Amusys, kuchnia",
              "status":"UNDELIVERED",
              "address":"Kątowa 20",
              "company":"Novomatic",
              "deliveryTime":"12:30"
           },
           { 
              "lunchSpotId":106903,
              "name":"stara portiernia, skrzydło prawe",
              "status":"DELIVERED",
              "address":"Krakowska 368",
              "company":"Novomatic",
              "deliveryTime":"12:30"
           },
           { 
              "lunchSpotId":106855,
              "name":"garaż",
              "status":"UNDELIVERED",
              "address":"Kątowa 4A",
              "company":"Novomatic",
              "deliveryTime":"12:30"
           },
           { 
              "lunchSpotId":106906,
              "name":"Amusys, kuchnia",
              "status":"UNDELIVERED",
              "address":"Kątowa 20",
              "company":"Novomatic",
              "deliveryTime":"12:30"
           },
           { 
              "lunchSpotId":106916,
              "name":"Kuchnia w firmie Netguru, 3 piętro, H2",
              "status":"UNDELIVERED",
              "address":"Pawia 9",
              "company":"Netguru",
              "deliveryTime":"13:30"
           },
           { 
              "lunchSpotId":107068,
              "name":"siedziba firmy ",
              "status":"UNDELIVERED",
              "address":"Pawia 9",
              "company":"Ocado Polska Sp Z o.o.",
              "deliveryTime":"13:30"
           },
           { 
              "lunchSpotId":107013,
              "name":"siedziba firmy ",
              "status":"UNDELIVERED",
              "address":"Pawia 9",
              "company":"Ocado Polska Sp Z o.o.",
              "deliveryTime":"13:30"
           },
           { 
              "lunchSpotId":106921,
              "name":"Amusys, kuchnia",
              "status":"UNDELIVERED",
              "address":"Kątowa 20",
              "company":"Novomatic",
              "deliveryTime":"12:30"
           },
           { 
              "lunchSpotId":106946,
              "name":"Amusys, kuchnia",
              "status":"UNDELIVERED",
              "address":"Kątowa 20",
              "company":"Novomatic",
              "deliveryTime":"12:30"
           },
           { 
              "lunchSpotId":106872,
              "name":"garaż",
              "status":"UNDELIVERED",
              "address":"Kątowa 4A",
              "company":"Novomatic",
              "deliveryTime":"12:30"
           },
           { 
              "lunchSpotId":107032,
              "name":"Kuchnia w firmie Netguru, 3 piętro, H2",
              "status":"UNDELIVERED",
              "address":"Pawia 9",
              "company":"Netguru",
              "deliveryTime":"13:30"
           },
           { 
              "lunchSpotId":106961,
              "name":"siedziba firmy ",
              "status":"UNDELIVERED",
              "address":"Pawia 9",
              "company":"Ocado Polska Sp Z o.o.",
              "deliveryTime":"13:30"
           }
        ]
     }
    ]
    
     localStorage.setItem("restaurant", JSON.stringify(restaurant));
  }
}
