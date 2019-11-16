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
             "address":"street 1",
             "company":"company 1",
             "deliveryTime":"12:30"
          },
          { 
             "lunchSpotId":106862,
             "name":"stara portiernia, skrzydło prawe",
             "status":"UNDELIVERED",
             "address":"street 2",
             "company":"company 2",
             "deliveryTime":"12:30"
          },
          { 
             "lunchSpotId":106859,
             "name":"stara portiernia, skrzydło prawe",
             "status":"DELIVERED",
             "address":"street 3",
             "company":"company 3",
             "deliveryTime":"12:30"
          },
          { 
             "lunchSpotId":106857,
             "name":"stara portiernia, skrzydło prawe",
             "status":"DELIVERED",
             "address":"street 4",
             "company":"company 4",
             "deliveryTime":"12:30"
          },
          { 
             "lunchSpotId":106860,
             "name":"garaż",
             "status":"UNDELIVERED",
             "address":"street 5",
             "company":"company 5",
             "deliveryTime":"12:30"
          },
          { 
             "lunchSpotId":106868,
             "name":"company 6, kuchnia",
             "status":"UNDELIVERED",
             "address":"street 6",
             "company":"company 6",
             "deliveryTime":"12:30"
          },
          { 
             "lunchSpotId":106903,
             "name":"stara portiernia, skrzydło prawe",
             "status":"DELIVERED",
             "address":"street 7",
             "company":"company 7",
             "deliveryTime":"12:30"
          },
          { 
             "lunchSpotId":106855,
             "name":"garaż",
             "status":"UNDELIVERED",
             "address":"street 8",
             "company":"company 8",
             "deliveryTime":"12:30"
          },
          { 
             "lunchSpotId":106906,
             "name":"Amusys, kuchnia",
             "status":"UNDELIVERED",
             "address":"street 9",
             "company":"company 9",
             "deliveryTime":"12:30"
          },
          { 
             "lunchSpotId":106916,
             "name":"Kuchnia w firmie company 10, 3 piętro, H2",
             "status":"UNDELIVERED",
             "address":"street 10",
             "company":"company 10",
             "deliveryTime":"13:30"
          },
          { 
             "lunchSpotId":107068,
             "name":"siedziba firmy ",
             "status":"UNDELIVERED",
             "address":"street 11",
             "company":"company 11",
             "deliveryTime":"13:30"
          },
          { 
             "lunchSpotId":107013,
             "name":"siedziba firmy ",
             "status":"UNDELIVERED",
             "address":"street 12",
             "company":"company 12",
             "deliveryTime":"13:30"
          },
          { 
             "lunchSpotId":106921,
             "name":"company 13, kuchnia",
             "status":"UNDELIVERED",
             "address":"street 13",
             "company":"company 13",
             "deliveryTime":"12:30"
          },
          { 
             "lunchSpotId":106946,
             "name":"company 14, kuchnia",
             "status":"UNDELIVERED",
             "address":"street 14",
             "company":"company 14",
             "deliveryTime":"12:30"
          },
          { 
             "lunchSpotId":106872,
             "name":"garaż",
             "status":"UNDELIVERED",
             "address":"street 15",
             "company":"company 15",
             "deliveryTime":"12:30"
          },
          { 
             "lunchSpotId":107032,
             "name":"Kuchnia w firmie company 16, 3 piętro, H2",
             "status":"UNDELIVERED",
             "address":"street 16",
             "company":"company 16",
             "deliveryTime":"13:30"
          },
          { 
             "lunchSpotId":106961,
             "name":"siedziba firmy ",
             "status":"UNDELIVERED",
             "address":"street 17",
             "company":"company 17",
             "deliveryTime":"13:30"
          }
       ]
     }
    ]
    
     localStorage.setItem("restaurant", JSON.stringify(restaurant));
  }
}
